import ZAI from 'z-ai-web-dev-sdk';

export async function analyzeBootcampContent() {
  try {
    const zai = await ZAI.create();

    const searchResult = await zai.functions.invoke("web_search", {
      query: "talentotech2.com.co inteligencia artificial explorador bootcamp contenido",
      num: 10
    });

    console.log('Search results:', searchResult);
    return searchResult;

  } catch (error: any) {
    console.error('Error analyzing bootcamp content:', error.message);
    return null;
  }
}

export async function getBootcampStructure() {
  try {
    const zai = await ZAI.create();

    const searchResult = await zai.functions.invoke("web_search", {
      query: "site:talentotech2.com.co inteligencia artificial módulos temas lecciones",
      num: 15
    });

    console.log('Bootcamp structure:', searchResult);
    return searchResult;

  } catch (error: any) {
    console.error('Error getting bootcamp structure:', error.message);
    return null;
  }
}