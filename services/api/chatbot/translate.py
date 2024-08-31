from googletrans import Translator

translator = Translator()

def translate_to_english(text):
    translated = translator.translate(text, src='ta', dest='en')
    return translated.text

def translate_to_tamil(text):
    translated = translator.translate(text, src='en', dest='ta')
    return translated.text
