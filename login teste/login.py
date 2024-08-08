from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    name = request.form['name']
    dob = request.form['dob']
    email = request.form['email']
    
    if name and dob and email:
        return 'Login bem-sucedido!'
    else:
        return 'Por favor, preencha todos os campos.'

if __name__ == '__main__':
    app.run(debug=True)tes