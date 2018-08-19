import transliterate
from pymystem3 import Mystem
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
import re

pattern = r'''(?x)          # set flag to allow verbose regexps
        (?:[A-Z]\.)+        # abbreviations, e.g. U.S.A.
      | \w+(?:-\w+)*        # words with optional internal hyphens
      | \$?\d+(?:\.\d+)?%?  # currency and percentages, e.g. $12.40, 82%
    '''
# tokenizer = RegexpTokenizer('\w+|\$[\d\.]+|\S+')
tokenizer = RegexpTokenizer(pattern)

mystem = Mystem()
def clean_and_normalize_text(text):
    text = re.sub(r'<.*?>', ' ', text)
    text = text.replace('x', ' ')
    text = mystem.lemmatize(text)
    text = tokenizer.tokenize(' '.join(text))
    text = map(lambda word: transliterate.translit(word,'ru'), text)
    text = filter(lambda w: w not in ru_stopwords,text)
    return ' '.join(list(text))