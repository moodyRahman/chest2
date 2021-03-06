
from functools import wraps
from flask import *
from flask_cors import CORS
from .db import *
import jwt


app = Flask(__name__)
CORS(app)

secret_key = "dfgjdkghdfkjg"

def jwtverify(route):
		@wraps(route)
		def wrapper(*args, **kwargs):
			try:
				decoded = jwt.decode(request.headers["Authorization"], secret_key, algorithms="HS256")
				user = decoded["username"]
				print(user)
				return route(*args, **kwargs)
			except Exception as e:
				print(e)
				print (e.stackTrace)
				return {"status":403}
		
		return wrapper


@app.route("/api", methods=["GET", "POST"])
@jwtverify
def api():
        print("YOUVE BEEN VERIFIED")
        out = {}
        out["status"] = 200
        out["posts"] = ["hello"]
        return out


@app.route("/auth", methods=["POST"])
def auth():
	data = request.get_json()

	if (data["username"] != "mood") or (data["password"] != "doof"):
		return {'status':401}

	payload = {
			"username":"moody"
	}
	encoded = jwt.encode(payload, secret_key, algorithm="HS256")
	return {
			"user":"moody",
			"token":encoded.decode("utf-8"),
			"status":200
			}


if __name__ == "__main__":
	app.run(debug=True, host="0.0.0.0")