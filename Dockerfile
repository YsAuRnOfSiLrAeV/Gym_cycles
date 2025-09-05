FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /workspace

COPY backend/pom.xml backend/pom.xml
RUN --mount=type=cache,target=/root/.m2 mvn -f backend/pom.xml -q -e -DskipTests dependency:go-offline

COPY backend backend
COPY frontend frontend

RUN --mount=type=cache,target=/root/.m2 mvn -f backend/pom.xml -q -DskipTests clean package

FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /workspace/backend/target/ai-workout-planner-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

ENV SPRING_DATASOURCE_URL="jdbc:postgresql://db:5432/postgres" \
    SPRING_DATASOURCE_USERNAME="postgres" \
    SPRING_DATASOURCE_PASSWORD="postgres"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar --spring.datasource.url=$SPRING_DATASOURCE_URL --spring.datasource.username=$SPRING_DATASOURCE_USERNAME --spring.datasource.password=$SPRING_DATASOURCE_PASSWORD"]



