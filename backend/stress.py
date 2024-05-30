import cv2
from fer import FER
import numpy as np

cap = cv2.VideoCapture(0)
detector = FER(mtcnn=True)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    result = detector.detect_emotions(frame)
    if result:
        for face in result:
            emotions = face['emotions']
            top_emotion = max(emotions, key=emotions.get)
            (x, y, w, h) = face["box"]
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
            cv2.putText(frame, f"{top_emotion}: {emotions[top_emotion]:.2f}", (x, y - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)
            if top_emotion in ['angry', 'fear', 'disgust', 'sad']:
                stress_level = "Stressed"
            else:
                stress_level = "Not Stressed"
            cv2.putText(frame, stress_level, (x, y + h + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

    cv2.imshow('Stress Detection', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()