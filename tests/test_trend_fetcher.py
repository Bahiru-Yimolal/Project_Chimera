# tests/test_trend_fetcher.py
import pytest

# Placeholder import — the AI will implement this later
try:
    from skills.skill_trend_fetcher import fetch_trends
except ModuleNotFoundError:
    fetch_trends = None

def test_trend_fetcher_structure():
    """Ensure trend fetcher returns a list of trends matching API contract."""
    
    # Example input
    input_payload = {
        "platform": "twitter",
        "filters": {
            "hashtags": ["#AI", "#Tech"],
            "keywords": ["machine learning"],
            "time_range": "last_24_hours"
        }
    }

    if fetch_trends is None:
        pytest.fail("skill_trend_fetcher.fetch_trends not implemented yet")

    # Call the function (will fail until implemented)
    trends = fetch_trends(input_payload)

    # Assert output type
    assert isinstance(trends, list), "Expected output to be a list"

    # Check each trend object structure
    for trend in trends:
        assert "trend" in trend
        assert "popularity" in trend
        assert "platform" in trend
        assert "timestamp" in trend
