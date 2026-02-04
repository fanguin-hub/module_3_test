from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """애플리케이션 설정"""

    # 프로젝트 정보
    PROJECT_NAME: str = "방화벽 로그 모니터링 시스템"
    API_VERSION: str = "v1"
    API_PREFIX: str = "/api/v1"

    # 데이터베이스 설정
    DATABASE_URL: str = "sqlite:///./database/logs.db"

    # CORS 설정
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    # JWT 설정 (개발용)
    SECRET_KEY: str = "dev-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        case_sensitive = True


settings = Settings()
