# 🧙‍♂️ Backend Wizards – Stage 0 Task  
### Build a Dynamic Profile Endpoint

This project implements a simple RESTful API endpoint (`/me`) that returns dynamic JSON data containing personal information, the current UTC timestamp, and a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

###🚀 Live Demo
---

🔗 Deployed on Railway:

https://dynamic-profile-endpoint-production-7ba9.up.railway.app/me
---

## 🚀 Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **External API:** [catfact.ninja](https://catfact.ninja/fact)
- **Hosting:**  Railway 

---

## 📡 Endpoint

### **GET** `/me`

#### ✅ Example Response
```json
{
  "status": "success",
  "user": {
    "email": "your-email@gmail.com",
    "name": "Your Name",
    "stack": "STACKITUP.js"
  },
  "timestamp": "2025-09-28T15:24:51.123Z",
  "fact": "Kitten are so cuteeee😊😊😊"
}
```

🧰 Installation & Setup
1️⃣ Clone this repository
```
git clone https://github.com/<your-username>/Dynamic-Profile-Endpoint.git
cd backend-wizards-stage0
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Create a .env file (optional)

In your project root, create a file named .env and add:
```
NAME=Your name
EMAIL=addemail@gmail.com
STACK=Full Stack Developer
PORT=3000
```
4️⃣ Run the server
```
npm start


or

node server.js
```

5️⃣ Test the endpoint
---
Open your browser or Postman and visit:

http://localhost:3000/me


You should see your JSON response.

🧪 Error Handling
---
If the Cat Facts API fails or times out, a fallback message will be returned:
```json
{
  "status": "success",
  "user": { ... },
  "timestamp": "2025-09-28T15:24:51.123Z",
  "fact": "Unable to fetch cat fact at the moment. Please try again later."
}
```

📜 Notes
---
Every request returns a new timestamp and cat fact.

Response Content-Type is automatically set to application/json.

No caching – each request fetches a new fact.

🌐 Deployment
---
Deploy your project on Railway, Heroku, or AWS.


After deployment, your live endpoint will look like:

https://yourappname.up.railway.app/me

🧩 Author
---
👩🏽‍💻 Vera Daniel
📧 Email: veradanicode@gmail.com

💻 GitHub: [@veradanicode](https://github.com/veradanicode)

💬 LinkedIn: [Vera Daniel](https://www.linkedin.com/in/vera-daniel-4a6942299)

🏁 Submission
---
✅ Working /me endpoint returning JSON

✅ Hosted on an approved platform

✅ Repo includes this README

✅ LinkedIn post with project details and snapshots