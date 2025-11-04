import pandas as pd
import mysql.connector

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'password',  # Replace with your MySQL password
    'database': 'mtsn1_malang'
}

def get_registrations_data():
    conn = mysql.connector.connect(**db_config)
    query = "SELECT * FROM registrations"
    df = pd.read_sql(query, conn)
    conn.close()
    return df

def analyze_registrations():
    df = get_registrations_data()

    # Basic statistics
    print("Total Registrations:", len(df))
    print("Average Age:", df['birth_date'].apply(lambda x: 2024 - int(str(x).split('-')[0])).mean())

    # Registrations by school origin
    school_counts = df['school_origin'].value_counts()
    print("Registrations by School Origin:")
    print(school_counts)

    # Save analysis to CSV
    df.to_csv('registration_analysis.csv', index=False)
    print("Analysis saved to registration_analysis.csv")

if __name__ == '__main__':
    analyze_registrations()
