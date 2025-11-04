from flask import Flask, jsonify, request
import mysql.connector
import pandas as pd

app = Flask(__name__)

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'password',  # Replace with your MySQL password
    'database': 'mtsn1_malang'
}

def get_db_connection():
    return mysql.connector.connect(**db_config)

@app.route('/api/registrations', methods=['GET'])
def get_registrations():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM registrations")
        registrations = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(registrations)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/registrations/<int:id>', methods=['GET'])
def get_registration(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM registrations WHERE id = %s", (id,))
        registration = cursor.fetchone()
        cursor.close()
        conn.close()
        if registration:
            return jsonify(registration)
        else:
            return jsonify({'error': 'Registration not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/registrations', methods=['POST'])
def add_registration():
    try:
        data = request.get_json()
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO registrations (name, email, phone, address, birth_date, school_origin)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (data['name'], data['email'], data['phone'], data['address'], data['birth_date'], data['school_origin']))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'message': 'Registration added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
