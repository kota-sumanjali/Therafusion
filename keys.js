var apiKey;

async function loadKeys() {
    const resp = await fetch('http://localhost:3000/api_keys');
    const data = await resp.json();
    data.forEach(key => {
        if (key.name == 'openai')
            apiKey = key.value;
    });
}


