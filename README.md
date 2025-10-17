# 🧙‍♂️ Backend Wizards – Stage 0 Task  
### Build a Dynamic Profile Endpoint

This project implements a simple RESTful API endpoint (`/me`) that returns dynamic JSON data containing personal information, the current UTC timestamp, and a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

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

📋 Response Fields
---
Field	Type	Description
status	String	Always "success"
user.email	String	Your email address
user.name	String	Your full name
user.stack	String	Your backend technology stack
timestamp	String	Current UTC time in ISO 8601 format
fact	String	Random cat fact from the Cat Facts API
```
🧰 Installation & Setup
1️⃣ Clone this repository
```
git clone https://github.com/<your-username>/backend-wizards-stage0.git
cd backend-wizards-stage0
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Create a .env file (optional)

If you need to add environment variables later (like API keys or PORT):

PORT=3000

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

{
  "status": "success",
  "user": { ... },
  "timestamp": "2025-09-28T15:24:51.123Z",
  "fact": "Unable to fetch cat fact at the moment. Please try again later."
}


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

💻 GitHub: @veradanicode

💬 LinkedIn: Vera Daniel

🏁 Submission

✅ Working /me endpoint returning JSON

✅ Hosted on an approved platform

✅ Repo includes this README

✅ LinkedIn/Dev.to post with project details and snapshots