from flask import Flask, request, jsonify
from flask_cors import CORS
from uuid import uuid4

app = Flask(__name__)
CORS(app)

contacts = {}

@app.route('/api/contacts/', methods=['GET'])
def get_contacts():
    return jsonify(list(contacts.values()))

@app.route('/api/contacts', methods=['POST'])
def create_contact():
    data = request.json
    contact_id = str(uuid4())
    contact = {
        "id": contact_id,
        "nombre": data.get("nombre"),
        "apellido": data.get("apellido"),
        "telefono": data.get("telefono"),
        "email": data.get("email"),
        "calle": data.get("calle"),
        "ciudad": data.get("ciudad"),
        "estado": data.get("estado"),
        "empresa": data.get("empresa"),
        "cargo": data.get("cargo"),
        "notas": data.get("notas"),
        "cumple": data.get("cumple")
    }
    contacts[contact_id] = contact
    return jsonify(contact), 201

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
