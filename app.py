import sqlalchemy 
import psycopg2
from sqlalchemy import create_engine
from Config2 import user,password
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import Flask,  jsonify
app = Flask(__name__)

    #replace the user, password, hostname and database according to your configuration according to your information
  
    
rds_connection_string = f"{user}:{password}@localhost:5432/mobility_db"
engine = create_engine(f'postgresql://{rds_connection_string}')
# def __init__(self):
#     self.connection = self.engine.connect()
#     print("DB Instance created")
    
# def fetchByQyery(self, query):
#     fetchQuery = self.connection.execute(f"SELECT * FROM mobility")
        
#     for data in fetchQuery.fetchall():
#         print(data)

Base = automap_base()

Base.prepare(engine, reflect=True)
Base.classes.keys()

# Base = automap_base()
# rds_connection_string = f"{user}:{password}@localhost:5432/mobility_db"
# engine = db.create_engine(f'postgresql://{rds_connection_string}')

# Base.prepare(engine, reflect=True)            
# Meas = Base.classes.mobility

# session = Session(engine)
# max_date=session.query(Meas.date)
# print(max_date)
mob_result=engine.execute('select * from mobility')
# for row in mob_result:
#     print(row)
    
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/names<br/>"
        f"/api/v1.0/passengers"
    )

if __name__ == '__main__':
    app.run(debug=True)