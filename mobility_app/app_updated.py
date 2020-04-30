import sqlalchemy 
import psycopg2
from sqlalchemy import create_engine
from Config2 import user,password
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import Flask,  jsonify, render_template

app = Flask(__name__,template_folder='template')

    #replace the user, password, hostname and database according to your configuration according to your information
  
user = 'dkioumjrcbkddr'
password = 'd446a3443ee872ddff18c5f2b2ec6b424583418abd6dd5b8b66a987f1f34bbe5'

rds_connection_string = f"{user}:{password}@ec2-34-204-22-76.compute-1.amazonaws.com:5432/d4t23c872s4dg3"
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
Mob=Base.classes.mobility

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
    # qu= "select * from mobility"
    # transit = engine.execute(qu)
    
    # for row in transit:
    #     transit= {"transit_type":row[0]}
    #     transit=jsonify(transit)
    #whatever you get back from the database
    return render_template('Project2.html')

    # """List all available api routes."""
    # return (
    #     f"Available Routes:<br/>"
    #     f"/api/v1.0/mobility<br/>"

 
@app.route("/fetch")   
def fetch():
    query="select * from mobility"
    data=engine.execute(query)
    mob_list=[]
    for row in data:
        toAppend={"geo_type":row[0],"region":row[1],"transportation_type":row[2],"score":row[3],"date":row[4]}
        mob_list.append(toAppend)
    data = mob_list
    return jsonify(data)   

# @app.route("/fetch")   
# def fetch():
#     data = #get something from the database
#     return jsonify(data)
    
# @app.route("/api/v1.0/mobility")

# def all_students():
#     qu= "select distinct(geo_type) from mobility"
#     transit = engine.execute(qu)
    
#     for row in transit:
#         transit= {"transit_type":row[0]}
#         # transit_data.append(transit)

#     # transit_data["transit"] = transit_data
#     return jsonify(transit)
# @app.route("/api/v1.0/mob")

# def all_s():
#     que="select * from mobility"




if __name__ == '__main__':
    app.run(debug=True)