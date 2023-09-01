import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';

// Create a variable that will hold a few pages of cool quotes that will be passed as the useState default value
const quotes = [
  `People feel they are the appropriate mix of what makes for a good person, and if not, they are unsastisfied 

I feel like my back is up against the wall. I loads of pressure coming in, and either my back or the wall is set to break. I want to load up some more pressure and see what happens

I’m telling a story, by saying black or white person you are prescribing the stereotypes of those races

Purpose for everything is innovation. Maybe we can break the system

Move fast and break things. 

Life is a game. 

we’re not that different in the sense that we’re each the center of our world

don’t cry over anything that can’t cry over you 

don’t be afraid to leave everything behind 

the enemy of the best is the good

its important to have a strong unique name for a strong identity as a kid

suffering is when you see reality as it is.. we push off reality bc we are biased to avoid pain

Live what you want to tell

Happiness is reality minus expectations 

Consumers are divinely discontent

Have you ever done, thought or felt anything outside of the now ? Do you think you ever will ?

There are no problems, only situations 

Life is a single player game

You invoke the universe when you say your name

We often say next time.. not knowing that the next time(s) are far more spread out than we imagine

If there was an answer, we would not be free

If you can't program it, you don't understand it

To the man with a hammer, every problem is a nail

The only true test of intelligence is that you get what you want out of life

Process saves us from the poverty of our intentions

While I was considering writing this (while watching a video), I told myself that I could wait until the next time my mind is free to write the very idea that was plaguing me down and examples thereof. THE NEXT TIMES ARE FEW AND FAR BETWEEN. that’s if they come, and if they do, you’re back to the same “dilemma”. Just fucking do it. 

You won’t do anything great by doing what others do, living like others live. 

Just because you’re not ready for the day, doesn’t mean it can always be night. 

Though life is short in the grand scheme of everything, from our eyes it is very long. Make decisions for the long term. (compound interest) Unless you'll be stuck living a life that you don't respect.

You’re gonna die. 

Life shrinks or expands in proportion to one’s courage. 
-------------------------------------------------
Place yourself in this imaginary situation.

Say that you were awarded the opportunity every night to dream up any dream your mind could alchemize for yourself. A lifetime of experience at your demand. Night after night, you would naturally fulfill all of your deepest desires, wake up, and say that was pretty great.

Now let's change things up. You can still dream up anything you desire, but you can't control what goes on around you. This go-around, you're a bit more domicile; nonetheless estatic that you are able to pursue any journey you set your mind on. Soon enough, the aspect of risk in these dreams would make them even more exhilarating than your omnipotent ones. You would get more and more daring, night-after-night, until you dream into the situation that besets you today. 

This dream is your life.
-------------------------------------------------

Desire is a contract you make with yourself to be unhappy until you get what you want

Self-esteem is the reputation that you have with yourself

Memento mori— “remember that you have to die.” All of this will go to nothing. Remember before you were born? Just like that. 

Forgiveness is accepting the apology you will never receive 

People aren't saying anything of weight if nobody would go up on stage and say the opposite ("kids are our future")

Want the solution to the answer? That’s for you to figure out. It’s about the process: ensure the process is right to the extent that you’re sufficed

Even if you are not ready for the day, it can not always be night

When you eat shit, it’s better not to nibble

Buddhist novelist George sanders - has an image of people’s “nectar in decaying containers”

Every day you wake up; deliberately or not, you choose the situation you’re i

Everybody should be under one time zone. Keep it simple. Should June be “December” in Brazil just because it is winter?

To measure the quality of your life, simply do nothing, and see how it feels

Hard choices, easy life. Easy choices, hard life. 

Your mouth is filling up with spit.. don’t swallow 

Treat people for who they CAN be

I apologize for the long letter, I didn't have time to make it shorter

The struggle ends when the gratitude begins

Your life is a series of endless choices

Things are never as good or as bad as they seem

Life is tough, and it’s tougher if you’re stupid

Try to change your mind about something every day

Don’t be afraid of being wrong. Because being wrong is just an opportunity to find more of the truth

What makes a river so restful to people is that is does not have any doubt. It is sure to get where it’s going, and it doesn’t want to go anywhere else 

Life is fucking beautiful

Do not be subject to inertia 

Challenge your assumptions and the assumptions of those around you as a way of life 

A man who had committed a mistake, and does not fix it, has created another mistake

Any emotion is better than no emotion 

A character, after death, only sees flowers as blobs of color, and his spirit guide tells him, “That’s because you never really looked at them when you were alive.”

Addiction is the progressive narrowing of the things that bring you pleasure

If I had an hour to figure out a problem, I’d spend 55 minutes thinking about the problem and 5 minutes thinking about solutions

Don’t lie, and you’ll never have to remember what you said 

We’re all devoted curators (of our lives)

Do something new every day. 

Not I hope they like me. I hope I like them. 

Any truths I maintain are my own property.

The fool, with his other traits, has this also: he is always getting ready to live. 

Morality is founded in our emotions. 

How do you know that you were an amoeba? Evolution? You’re pressured into it. You’re crazy if you don’t, yet the people judging don’t know the details.  Who’s crazy?

Your world is a reflection of your world within

Don’t do what will make you lie

To be a phoenix, you have to burn 

Restraining orders don’t work on the people you put restraining orders on

I’m not gaslighting you, you’re just crazy

You’re worried of a feeling

Unease is the gap between between intent and action

Don’t think about the comfort of action, think of the discomfort of inaction 

Imagine having to relive your day for the rest of your life.. would you have had a good life ?

Dying tomorrow is not worse than dying on any other day

If you don’t fear the unknown, the unknown will be kind to you

You decide who you are at every moment. An infintecimate amount of choices. 

The answers are there for those who seek

Your network is your net worth 

Think about any situation you’ve been in. Now think about it without any fears or desires. Think about how simple it is.

Imagine an angel comes to you.. says time to set up your affairs. You’re going to be coming with me. You resist, and say you want another week. Well, what’ve you been doing with the rest of your life.. what happened? I wasn’t paying attention. That’s one hell of a thing to say about your life. 

Learn what makes someone feel important, and you learn who they are. 

Being a counter-indicator is an odd position.. no matter what you do you’re wrong. Switch? That’s the wrong decision. 

The gap between deontology and utilitarianism is illusory

Activities tend to fill the time they are allotted (Parkinson’s Law)

Resentment is like drinking poison and waiting for the other person to die 

Every man has a right to property [in his own person]

Being present isn't ignoring the past or future.. the past and future are only exhibited in the present.

You are attached. To something or to nothing. Perfectly random inputs [in your environment], or an unknown state of being, is necessary.

[Universal Answer Paradox] 
There are no dichotomies.. 
To work backwards is to assume you're right.. & by definition irrational [ logic absent ]
For any single dichotomy, to be considered true, all must not only be accounted for, but clearly and consistently reasoned. 
Out of these, only one can be True, or else they are the same.

There can only be one truth.

Be ware of the 37% Rule

Isolation Paradox- the more time you develop yourself-intellectually, emotionally, spiritually, physically- the more you narrow the selection of suitable long-term partners

A trial is a giving of yourself. Huge effect on your consciousness is to be concerned. 

If a girl leans in the kiss you after felacio, do you concede?

Happiness is how one feels when things are going well.

You control what you do,  you do what you want, and you can't control what you (want to)* want to do.

The less confident you are, the more serious you have to act.

"We fall insensibly into dangerous situations, from which we could easily have safeguarded ourselves, but from which we cannot withdraw without heroic efforts which appal us. So finally, as we tumble into the abyss, we ask God why he has made us so feeble. But, in spite of ourselves, He replies through our consciences: 'I have made you too feeble to climb out of the pit, because I made you strong enough not to fall in.'" - Rousseau, Confessions, Cohen trans.

The world is highly inefficient. People use the nearest multiple of 5 as a marker.. what’re the odds that’s actually the most effective?

Read all of the books—forget the sources.. and you’re a genius. 

Great spirits have always faced opposition from mediocre minds. 

Argue like you’re right. Listen like you’re wrong. 

Is it possible to prove absence ?

To enjoy the world.. or to improve the world. 

When he saw the breadth of his domain, he wept, for there were no more worlds to conquer. 

Prove you have free will. 

Subjectivity comes from bias. 

Complexity is a blessing. Simplicity is freedom. 

Whenever you find yourself on the side of the majority, it's time to pause and reflect.

“Many a false step was made by standing still.” — Fortune Cookie

Most people choose unhappiness over uncertainty. 

There’s no difference between a pessimist who says, ‘Oh, it’s hopeless, so don’t bother doing anything,’ and an optimist who says, ‘Don’t bother doing anything, it’s going to turn out fine any way.’ Either way, nothing happens. - 

Story of the Chinese farmer. Maybe. 

 Contemplate the life of a social entrepreneur. (Look  into Peter Singer.)

Everything you do, you did be cause you thought it was your best option, for any reason. - Plato

Every person is one decision away from disaster.

The mind-body problem. Interesting people will be 

Ridicle for self-plagarism will be soon be un-understood.

It’s getting harder to fight submission—be raw & be defiant to be of value. 

I don't ever want to fail, but I want to risk failure every time out of the gate.

Those entrenched in expectations will eventually rationalize [un]fulfillment. 

questions to stimulate the idea that consciousness can be solely claimed by humans: how do you think humans obtained consciousness? how would this look being applied to others? how does this make you feel? is the bias warranted? who do I want to be? what do I believe I can be?

Life is the dance between what we love and fear most. 

The harder I work, the luckier I get. 

Sugar and salt look the same. 

Problems are questions that have not been answered. Premise in the form of an antecedant.

You can't solve a problem with the mind that created it.

Do what you love and let it kill you. -  Bukowski

What can happen if everything goes right?

To be brave, there needs to be fear. 

You reap what you sow. "Fairly blunt, hopefully clear." 

Growth is happiness. Lucky if you didn’t start at the top. 

Your audience is not yourself. 

“Martin Luther King & Emelia Earhart never had a computer, but if they did, you know they would’ve used a Mac.”

Set your boundaries, and have those difficult conversations.

Show me the incentive, and I will show you the outcome.

Strong opinions, loosely held. 

“To a disciple who was forever complaining about others, the Master said, ‘If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.’”​ - Anthony de Mello​

"The tremendous price (of competition) is that you stop asking some bigger questions ... don't always go through the tiny little doors that everyone tries to rush through, maybe go around the corner, go through the vast gate no one is taking."

"What risk actually looks like is not doing something; when you may spend the rest of your life regretting it." - Sam Altman

"People regret things that they didn't do more than things they did."

"I haven't failed. I've just found 10,000 ways that don't work" - Benjamin Franklin

"God's greatest gift is creating doubt." - Dad

"I realized that I could lose myself in a character. I could live in a character. It was a choice. And when I finished with that, I took a month to remember who I was. 'What do I believe? What are my politics? What do I like and dislike?' It took me a while, and I was depressed going back into my concerns and my politics. But there was a shift that had already happened. And the shift was, 'Wait a second. If I can put Jim Carrey aside for four months, who is Jim Carrey? Who the hell is that?' ... I know now he does not really exist. He's ideas. ... Jim Carrey was an idea my parents gave me. Irish-Scottish-French was an idea I was given. Canadian was an idea that I was given. I had a hockey team and a religion and all of these things that cobble together into this kind of Frankenstein monster, this representation. It's like an avatar. These are all the things I am. You are not an actor, or a lawyer. No one is a lawyer. There are lawyers, law is practiced, but no one is a lawyer. There is no one, in fact, there." - Jim Carrey

If I’m only for myself, who will be for me? If not now, when? If I’m only for myself, what am I? -Hillel 

nobody goes there anymore, it's too crowded - yogi bear

swing at the strikes - yogi man

A ship in a harbor is safe, but that’s not what ships are built for. 

One in a million is more than enough. 

You’ve seen your point of view, and are limited to rationally make assumptions from your experience.. expecting others to do the same. 

During a cattle competition at the beginning of the 20th century, a guy named Francis Galton saw that no single person could consistently guess within a range of a cattle's weight, though the average of the crowd's guesses were amazingly accurate.

Trust is build one marble at a time.

Optimism is a force multiplier.

Jump and realize that the net is you.

The fear of change founds the fear of death.  

It’s not how about well you’re doing, but how long you’re doing well. 

Does your decision shrink or expand your options?

Cowards die many times before their deaths; the valiant never taste of death but once.

What would you do if you know you couldn’t lose. 

Avoiding judging through understanding.

What's profound is that you make an amount of decisions to choose the same path every day, an amount that dwarfs any change, yet a single rash and adventurous decision to change your environment unlocks a path that holds entirely new experiences.

Losing the right game can be better than winning the game in front of you. 

You are whoever you pretend to be. 
`,
];

export default function Notepad({ onClose }) {
  const [docText, setDocText] = useState(quotes);
  const [wordWrap, setWordWrap] = useState(true);

  function onClickOptionItem(item) {
    switch (item) {
      case 'Exit':
        onClose();
        break;
      case 'Word Wrap':
        setWordWrap(!wordWrap);
        break;
      case 'Time/Date':
        const date = new Date();
        setDocText(
          `${docText}${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        );
        break;
      default:
    }
  }
  function onTextAreaKeyDown(e) {
    // handle tabs in text area
    if (e.which === 9) {
      e.preventDefault();
      e.persist();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      setDocText(`${docText.substring(0, start)}\t${docText.substring(end)}`);

      // asynchronously update textarea selection to include tab
      // workaround due to https://github.com/facebook/react/issues/14174
      requestAnimationFrame(() => {
        e.target.selectionStart = start + 1;
        e.target.selectionEnd = start + 1;
      });
    }
  }

  return (
    <Div>
      <section className="np__toolbar">
        <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} />
      </section>
      <StyledTextarea
        wordWrap={wordWrap}
        value={docText}
        onChange={e => setDocText(e.target.value)}
        onKeyDown={onTextAreaKeyDown}
        spellCheck={false}
      />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`;

const StyledTextarea = styled.textarea`
  flex: auto;
  outline: none;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  ${props => (props.wordWrap ? '' : 'white-space: nowrap; overflow-x: scroll;')}
  overflow-y: scroll;
  border: 1px solid #96abff;
`;
