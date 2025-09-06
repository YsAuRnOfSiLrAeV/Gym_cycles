# GymCycles Workout Planner

## Live Demo
The application is deployed on **Render (free plan)**:  
👉 [https://gymcycles.onrender.com](https://gymcycles.onrender.com)

> ⚠️ **Note:** On the free Render plan, the service goes to sleep when inactive.  
> When opening the link, you may first see a screen with messages like:  
> `Service waking up...`, `Allocating compute resources...`, `Your app is almost live...`.  
> This is normal - just wait about **1 minute** until the app starts.


---


# For local setup:


## Prerequisites
- **Java 21**  
- **PostgreSQL**


## Database Setup
1. Install PostgreSQL if not already installed.  
2. Create a PostgreSQL database and update the properties in  
   `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:YOUR_PORT/YOUR_DATABASE_NAME
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

## Running the Application
The application uses **Maven** to automatically handle all dependencies and build processes, including the frontend setup.

```bash
cd backend

# On Windows
mvnw.cmd spring-boot:run

# On Unix/Linux/macOS
./mvnw spring-boot:run
```

> ⚠️ **Note for IDE users (VSCode, IntelliJ, etc.):**  
> If your IDE automatically runs Maven plugins, wait until the `node` and `node_modules` folders appear in the frontend directory.  
> Alternatively, disable automatic Maven plugin execution to avoid unnecessary delays.

The app will be available at: [http://localhost:8080](http://localhost:8080)


---


## Features
- 🔹 Strength and Hypertrophy **training program generation**  
- 🔹 **Program export** to PDF/Excel (via jsPDF & ExcelJS)  
- 🔹 **User profile management** (PostgreSQL + LocalStorage)  
- 🔹 Educational sections: **nutrition fundamentals** and **exercise guides**  
- 🔹 **Responsive UI** with modern design  


## Tech Stack
- **Backend:** Spring Boot 3.4.5, Hibernate, PostgreSQL  
- **Frontend:** React, TypeScript, Vite, Tailwind CSS  
- **Build Tool:** Maven  
- **Deployment:** Docker, Render (free plan)


📌 *Future plans:* Add meal planning system and more training cycles.

