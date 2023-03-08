const quotes = {
    "- Queen Elizabeth II": '"It is often the small steps, not the giant leaps, that bring about the most lasting change.."',
    "- Nelson Mandela": '"Education is the most powerful weapon which you can use to change the world."',
    "- Amanda Gorman": `"There is always light. If only we're brave enough to see it. If only we're brave enough to be it."`,
    "- Amelia Earhart": '"The most difficult thing is the decision to act; the rest is merely tenacity."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- Helen Keller": '"Never bend your head. Always hold it high. Look the world straight in the eye."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Dalai Lama": '"Happiness is not something readymade; it comes from your own actions."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Thomas Edison": '"Opportunity is missed by most people because it is dressed in overalls and looks like work."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Buddah": '"The mind is everything. What you think you become."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Aristotle": '"It is during our darkest moments that we must focus to see the light."',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- William James": '"Act as if what you do makes a difference. It does."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Madam C.J. Walker": `"Don't sit down and wait for the opportunities to come. Get up and make them."`,
    "- Maya Angelou": `"Try to be a rainbow in someone else's cloud."`
  };


document.querySelector("#newPhra").addEventListener("click", () => {
    newPhrase();
});

function newPhrase(){
  // grab all the keys in the dictionary (authors) and store in an array
  const authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  const author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  const quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function(){
    newPhrase()
}