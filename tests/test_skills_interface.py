# tests/test_skills_interface.py
import pytest
import inspect

# Placeholder imports — will fail until AI implements these modules
try:
    from skills import skill_download_youtube, skill_transcribe_audio, skill_generate_caption
except ModuleNotFoundError:
    skill_download_youtube = None
    skill_transcribe_audio = None
    skill_generate_caption = None

def test_skill_download_youtube_signature():
    if skill_download_youtube is None:
        pytest.fail("skill_download_youtube module not implemented yet")
    sig = inspect.signature(skill_download_youtube.download)
    assert "url" in sig.parameters
    # Optional param
    assert "quality" in sig.parameters

def test_skill_transcribe_audio_signature():
    if skill_transcribe_audio is None:
        pytest.fail("skill_transcribe_audio module not implemented yet")
    sig = inspect.signature(skill_transcribe_audio.transcribe)
    assert "file_path" in sig.parameters
    assert "language" in sig.parameters

def test_skill_generate_caption_signature():
    if skill_generate_caption is None:
        pytest.fail("skill_generate_caption module not implemented yet")
    sig = inspect.signature(skill_generate_caption.generate)
    assert "media_path" in sig.parameters
    assert "language" in sig.parameters
    assert "max_length" in sig.parameters
