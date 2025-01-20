# from flask import Flask
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Members api route
# @app.route("/members")
# def members():
#   return {"members": ["Member1", "Member2", "Member3"]} # random stuff

# if __name__ == "__main__":
#   app.run() # since this is in development mode

# # will be on localhost:5000/members

from flask import Flask # import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/pizza") # make an endpoint
def pizza():
    return {"response": "pizza"}

@app.route("/burger")
def burger():
    return {"response": ["tomato", "bun", "patty", "lettuce"]}

if __name__ == "__main__":
    app.run()