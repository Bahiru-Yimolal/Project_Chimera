
## Skills

### 1. `skill_download_youtube`
**Purpose:** Download YouTube videos for processing or analysis  
**Input:**  
- `url` (str): YouTube video URL  
- `quality` (str, optional): Video quality, default `'720p'`  
**Output:**  
- `file_path` (str): Local path to video  
- `duration` (int): Video length in seconds  
- `success` (bool): Download status  
**Notes:**  
- Requires Media MCP server access  
- Returns `success: false` if download fails

---

### 2. `skill_transcribe_audio`
**Purpose:** Transcribe audio files to text  
**Input:**  
- `file_path` (str): Path to audio file  
- `language` (str, optional): Language code, default `'en-US'`  
**Output:**  
- `transcript` (str): Transcribed text  
- `duration` (int): Audio length in seconds  
- `success` (bool): Transcription status  
**Notes:**  
- Supports mp3, wav, m4a  
- Returns empty transcript if transcription fails

---

### 3. `skill_generate_caption`
**Purpose:** Generate descriptive captions for media  
**Input:**  
- `media_path` (str): Path to video or image file  
- `language` (str, optional): Caption language, default `'en-US'`  
- `max_length` (int, optional): Maximum words, default `30`  
**Output:**  
- `caption` (str): Generated caption  
- `success` (bool): Status of caption generation  
**Notes:**  
- AI-based captioning model  
- Returns placeholder caption if generation fails  
- Can combine with `skill_transcribe_audio` for videos
