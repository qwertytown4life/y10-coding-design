import sys
from io import StringIO
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route("/fun", methods=["POST"])
def fun():
    data = request.get_json()

    code = data.get("code")

    if code is None:
        return {"error": "You did not provide a valid piece of code"}
 
    old_stdout = sys.stdout
    sys.stdout = mystdout = StringIO()

    exec(code)

    sys.stdout = old_stdout

    message = mystdout.getvalue()

    print(message)

    return {"result": message}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
