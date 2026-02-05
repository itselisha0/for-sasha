const reasons = [
    "You make me smile every day.",
    "Your laugh is contagious.",
    "You're the most caring person I know.",
    "Your eyes are so beautiful.",
    "You always know how to brighten my day.",
    "You're my best friend.",
    "You're incredibly smart and talented.",
    "You have the kindest heart.",
    "You make everything better just by being there.",
    "You inspire me to be a better person.",
    "You're the most beautiful person, inside and out.",
    "You're the most amazing listener.",
    "You always support me in everything I do.",
    "You're the most loving person I know.",
    "You're so funny and always make me laugh.",
    "Your soul is pure and full of light.",
    "Your eyes sparkle when you talk about things you love.",
    "Your ability to make me feel understood.",
    "You make me feel like the luckiest person in the world.",
    "You make me feel cherished.",
    "Your ability to make even the smallest moments feel special.",
    "Your encouragement and support means everything to me.",
    "Your hugs are the best.",
    "Your care and concern for others.",
    "You're so trustworthy and reliable.",
    "You have the biggest heart.",
    "You always do your best.",
    "You completely flipped my life upside down when I met you.",
    "You're so effortlessly beautiful.",
    "You accept me for me.",
    "You make me feel like I can do anything.",
    "You are the highlight of my day.",
    "Your loyalty is unwavering.",
    "Your smile lights up the room.",
    "You bring out the best in me.",
    "You're so easy to talk to.",
    "Your laugh makes everything brighter.",
    "You believe in me even when I doubt myself.",
    "You remind me how beautiful life can be.",
    "You challenge me to be the best version of myself.",
    "You've taught me so much about love and kindness.",
    "Your sense of humor is unmatched.",
    "You're (mostly) honest with me, even when it's hard.",
    "Your energy is contagious.",
    "You're someone I can always count on.",
    "You've shown me what true friendship looks like.",
    "You make ordinary days extraordinary.",
    "You're endlessly creative and imaginative.",
    "You're proof that magic exists in this world.",
    "You've given me memories that I'll cherish forever.",
    "You're the reason I go to sleep with a smile on my face (sometimes).",
    "You make me believe in soulmates.",
    "You're always on my mind.",
    "You're the first person I think of when something good happens.",
    "You pop into my head whenever I listen to music.",
    "You unexpectedly showed up in my life and changed everything.",
    "You're the only person I'd share my food with (sometimes).",
    "You're my other half.",
    "You're proof that angels walk among us.",
    "You've made me fall in love with little moments.",
    "Your face is forever etched in my heart.",
    "You're the reason why I randomly smile throughout the day (and look like a maniac).",
    "You make every moment feel like a gift.",
    "You're my favorite person to share silence with.",
    "You've taught me how to find joy in the little things.",
    "You're the brightest star in my sky.",
    "676767676767 You're my favorite kind of distraction from stress.",
    "You've shown me that love doesn't have to be perfect to be real.",
    "You're the reason I wake up grateful every morning.",
    "You're my favorite kind of magic--the kind that's real.",
    "You make my heart race in the best way.",
    "You're the reason why I hope for a happy ending.",
    "You're the person I'd wait for, no matter how long it takes.",
    "You're the reason why I'm excited for whatever comes next.",
    "You've taught me how to find peace in the chaos of life.",
    "You're the person I'd want by my side during life's scariest moments.",
    "You've taught me that love is about finding joy in the journey, not just the destination, no matter how long it takes.",
    "You've shown me that love is about being vulnerable, even when it's scary.",
    "You're my bunny ;)",
    "You're the person I'd share my umbrella with--even if it means getting wet myself.",
    "You're the reason I don't mind waiting--because you're worth it.",
    "You affect me in ways I never thought possible.",
    "You're the only person I'd want to hold my hand.",
    "You've shown me how to be confident in myself.",
    "You're the reason why I'm excited for the future.",
    "You're the person I'd choose every time.",
    "You're the reason why I believe in Happily Ever Afters.",
    "You're the person I'd fly across the country for.",
    "You always manage to make me feel like the most special person in the world.",
    "You're perfect in every way.",
    "You make me feel ways I never thought possible.",
    "You've taught me that distance means so little when someone means so much.",
    "You're proof that the best things in life are worth waiting for.",
    "You're the reason I don't mind staying up late (sometimes) or waking up early.",
    "You make every song sound like it was written just for us.",
    "You're the reason why I believe in love.",
    "You're the reason why I believe in high school sweethearts.",
    "You're the person I'd sit in silence for hours with.",
    "You're the person I'd wait for so I can be with you.",
    "YOU'RE MY EVERYTHING BABY AND I LOVE YOU SO MUCH 🤍"
];

// Function to populate the list with reasons
function populateReasons() {
  const reasonList = document.getElementById('reason-list');
  reasons.forEach((reason, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = reason;
      listItem.style.setProperty('--i', index); // Set animation delay

      // Add a class for the last reason
      if (index === reasons.length - 1) {
          listItem.classList.add('special-reason');
      }

      reasonList.appendChild(listItem);
  });

  // Trigger confetti after all reasons are displayed
  setTimeout(() => {
      const boom = document.querySelector('#reason-list li.special-reason');
      if (lastReason) {
          confetti({
              particleCount: 200,
              spread: 100,
              origin: { y: 0.6 }
          });
      }
  }, reasons.length * 200); // Delay based on animation timing
}


document.addEventListener('DOMContentLoaded', () => {
  // Populate the reasons list
  populateReasons();

  const revealButton = document.getElementById('reveal-button');
  const specialMessage = document.getElementById('special-message');
  const container = document.querySelector('.container');
  const reasonsContainer = document.querySelector('.reasons-container');
  const header = document.querySelector('header');
  const heartContainer = document.querySelector('.heart-container');
  const footer = document.querySelector('footer');

  let buttonShown = false; // Flag to ensure the button only appears once

  // Show the button when the user scrolls to the bottom of the reasons list
  reasonsContainer.addEventListener('scroll', () => {
    if (!buttonShown && reasonsContainer.scrollTop + reasonsContainer.clientHeight >= reasonsContainer.scrollHeight) {
      console.log('Reached bottom of the list');
      revealButton.style.display = 'block';
      buttonShown = true; // Set the flag to true
    }
  });

  // Button click event
  revealButton.addEventListener('click', () => {
    console.log('Button clicked! Revealing message...');

    // Hide all other elements
    header.style.display = 'none';
    heartContainer.style.display = 'none';
    reasonsContainer.style.display = 'none';
    revealButton.style.display = 'none';
    footer.style.display = 'none';

    // Show the special message with a fade-in animation
    specialMessage.classList.add('show');

    // Trigger confetti when the message appears
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  });
});
