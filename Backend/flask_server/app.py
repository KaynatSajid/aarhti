from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import pandas
from ultralytics import YOLO
app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])


@app.route('/detect', methods=['POST'])
def detect_objects():
    # check if video file was uploaded
    model = YOLO('best.pt')
    model.fuse()
    video = cv2.VideoCapture('../Main/uploads/video.mp4')
    count=0
    while True:
        success, image = video.read()
        if not success:
            break   
        results = model.predict(image, stream=True)                 # run prediction on img
        for result in results:                                         # iterate results
            boxes = result.boxes                                      # get boxes on cpu in numpy
            for box in boxes:                                          # iterate boxes
                #results.save()
                count=count+1
        
    # return number of detected objects as JSON response
    response = {'object_count': count}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
