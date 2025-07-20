
from flask import Flask, render_template, request
import os
import subprocess

app = Flask(__name__)
UPLOAD_FOLDER = 'static'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        photo = request.files['photo']
        input_path = os.path.join(UPLOAD_FOLDER, 'input.jpg')
        output_path = os.path.join(UPLOAD_FOLDER, 'output.jpg')
        photo.save(input_path)

        # Call the C++ image processor
        subprocess.run(['./process', input_path, output_path])

        return render_template('index.html', image='output.jpg')
    return render_template('index.html', image=None)

if __name__ == '__main__':
    app.run(debug=True)
