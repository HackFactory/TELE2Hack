import keys
import telebot
from telebot import apihelper
from utils import config

apihelper.proxy = {
    'https': keys.PROXY_KEY
}

bot = telebot.TeleBot(keys.TELEGRAM_API_TOKEN)


@bot.message_handler(commands=["start"])
def handle_start(message):
    print(message)
    first_name = message["from_user"]["first_name"]
    bot.send_message(message.chat.id, config.START_MSG.format(first_name))


@bot.message_handler(commands=["help"])
def handle_help(message):
    bot.send_message(message.chat.id, config.HELP_MSG)


@bot.message_handler(content_types=["text"])
def handle_text(message):
    pass


if __name__ == '__main__':
    bot.polling(none_stop=True)
