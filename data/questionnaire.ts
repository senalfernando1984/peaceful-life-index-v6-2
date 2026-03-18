import { QuestionnaireItem } from '@/types/pli';

export const QUESTIONNAIRE_ITEMS: QuestionnaireItem[] = 
[
  {
    "id": "q1",
    "ruleId": "do-good",
    "title": "Scenario 1",
    "story": "You are just about to leave work after a long day. As you walk out, you notice a colleague struggling to carry several files and a laptop while also trying to answer a phone call. You feel tired and you have your own plans waiting, but you can see they are having a genuinely difficult moment. You have just enough time to decide whether to get involved or keep moving.",
    "subdomain": "Spontaneous helping",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore the situation and leave because it is not my responsibility.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I notice the problem but avoid helping because it may inconvenience me.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I smile or acknowledge them but do not actually step in to help.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I offer a small amount of practical help before I leave.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I step in willingly, help them properly, and make sure they are settled before I go.",
        "score": 4
      }
    ]
  },
  {
    "id": "q2",
    "ruleId": "do-good",
    "title": "Scenario 2",
    "story": "Late in the evening, a friend sends you a message saying they had a terrible day and feel emotionally overwhelmed. You are not in crisis yourself, but you are already tired and tempted to put your phone away. At the same time, you know this person rarely asks for support unless they really need it. You have to decide how present and responsive you will be.",
    "subdomain": "Emotional support",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore the message completely and decide not to respond.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I send a very short reply just to end the conversation quickly.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I reply kindly, but I do not really make space to listen or support them.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I respond with concern and make some time to listen and support them.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I respond warmly, listen carefully, and support them in a thoughtful and steady way.",
        "score": 4
      }
    ]
  },
  {
    "id": "q3",
    "ruleId": "do-good",
    "title": "Scenario 3",
    "story": "At home, there is an unpleasant task that clearly needs to be done. Everyone seems tired and nobody is volunteering. You can see that if you do not step in, the responsibility will likely fall on someone else who is also already stretched. You are in a position to help, but you have to decide whether you will take responsibility, wait, or avoid it.",
    "subdomain": "Contribution at home",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I leave it completely for someone else to deal with.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I complain about the situation but still do nothing helpful.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I help only if somebody directly asks me to do it.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I take initiative and do my share without making a fuss.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I step in willingly, do what is needed, and help keep the atmosphere cooperative.",
        "score": 4
      }
    ]
  },
  {
    "id": "q4",
    "ruleId": "do-good",
    "title": "Scenario 4",
    "story": "You become aware of a small way to help someone without them ever knowing it was you. There is no praise, credit, or personal gain involved. In fact, nobody would even notice whether you helped or not. The only reason to do it would be because it would genuinely make life a bit easier for another person.",
    "subdomain": "Kindness without recognition",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I do nothing because there is no benefit to me.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I would only help if other people knew I had done it.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I think about helping, but I decide it is not worth the effort.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I quietly do the helpful act without needing recognition.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I do it gladly because I value the act of kindness itself, even when nobody sees it.",
        "score": 4
      }
    ]
  },
  {
    "id": "q5",
    "ruleId": "do-right-thing",
    "title": "Scenario 1",
    "story": "You discover that you made a small mistake in a report or responsibility you completed earlier. No one else has noticed it yet and there is a realistic chance that it may never be traced back to you. Correcting it now might feel embarrassing, and staying silent would be easier in the short term. You have to decide how truthful and responsible you will be.",
    "subdomain": "Honesty",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I hide the mistake and hope nobody discovers it.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I keep quiet unless someone directly asks me about it.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I admit it only if correction becomes unavoidable later.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I report it promptly and help correct it.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I take responsibility openly and focus on fixing it properly, even if it feels uncomfortable.",
        "score": 4
      }
    ]
  },
  {
    "id": "q6",
    "ruleId": "do-right-thing",
    "title": "Scenario 2",
    "story": "A group task has gone well and your role is visible, but you know another person also contributed in an important way behind the scenes. When praise starts coming your way, you realize that you could easily accept the recognition without anyone questioning it. In that moment, fairness depends entirely on what you choose to say and do.",
    "subdomain": "Fairness",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I take the credit as if the work were mainly mine.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I mostly take the credit and mention the other person only lightly.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I stay vague about who contributed what.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I clearly acknowledge that the work was shared.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I make sure the other person is recognized fairly, even if it means less praise for me.",
        "score": 4
      }
    ]
  },
  {
    "id": "q7",
    "ruleId": "do-right-thing",
    "title": "Scenario 3",
    "story": "You are in a social or work setting where people around you are pressuring you to go along with something you believe is wrong. The behaviour is being treated as normal, and resisting it may make you stand out. You feel the pull of wanting to belong, but you also know your decision will say something about the kind of person you are trying to be.",
    "subdomain": "Value-based action",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I go along with it to avoid standing out.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I join in reluctantly even though I know it feels wrong.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I avoid active involvement but I do not clearly resist it either.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I respectfully decline and stay aligned with what I believe is right.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I stay aligned with my values clearly and calmly, even when there is social pressure to do otherwise.",
        "score": 4
      }
    ]
  },
  {
    "id": "q8",
    "ruleId": "do-right-thing",
    "title": "Scenario 4",
    "story": "You promised someone you would help them with something important. Later, a more enjoyable opportunity comes up at the same time, and nobody is forcing you to keep your original word. You know the other person is counting on you, but you are tempted to rationalize cancelling. You have to decide whether convenience or commitment will guide your choice.",
    "subdomain": "Keeping commitments",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I cancel casually and choose the more enjoyable option for myself.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I try to get out of the promise with excuses.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I delay deciding and hope the situation resolves itself.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I keep my promise unless there is a genuinely serious reason not to.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I honour my commitment responsibly because reliability matters more to me than short-term convenience.",
        "score": 4
      }
    ]
  },
  {
    "id": "q9",
    "ruleId": "do-no-harm",
    "title": "Scenario 1",
    "story": "You have been emotionally exhausted for several days and can tell that your judgement is not as steady as usual. You are tempted to keep pushing through without rest or support, even though part of you knows that continuing this pattern may damage your wellbeing. In that moment, the decision is not only about productivity but about whether you protect yourself or keep neglecting warning signs.",
    "subdomain": "Self-protection / self-damaging behaviour",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore the warning signs and continue in a way that is clearly harmful to me.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I notice the risk but still keep going because stopping feels inconvenient.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I partly slow down, but I still do not take proper protective action.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I take a step to protect myself and reduce harm.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I respond responsibly by protecting myself early and choosing a safer, healthier course.",
        "score": 4
      }
    ]
  },
  {
    "id": "q10",
    "ruleId": "do-no-harm",
    "title": "Scenario 2",
    "story": "You are already tense when someone close to you says something small that irritates you more than it should. You can feel the pressure of the day inside you, and it would be easy to let your frustration spill out onto the other person. You realize that your response in the next few seconds could either create avoidable harm or prevent it.",
    "subdomain": "Harm to others",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I react sharply and say something hurtful without holding back.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I speak coldly and let my frustration land on the other person.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I control the worst of it, but I still respond in a tense or hurtful way.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I pause and answer more carefully so I do not cause unnecessary harm.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I recognize what is happening inside me and choose a calm response that protects both the other person and the relationship.",
        "score": 4
      }
    ]
  },
  {
    "id": "q11",
    "ruleId": "do-no-harm",
    "title": "Scenario 3",
    "story": "You are spending time outdoors with other people, and by the end there is plastic waste and litter being left behind casually. Nobody seems especially concerned, and it would be easy to treat it as unimportant. At the same time, you know that these small repeated choices are part of how environmental harm becomes normal in daily life. Your action will show how seriously you take avoidable harm beyond yourself.",
    "subdomain": "Environmental harm",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I add to the waste and leave without concern.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I leave my own waste behind if proper disposal feels inconvenient.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I manage only my own waste but ignore the wider avoidable harm around me.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I make sure I do not contribute to the environmental mess and dispose of my waste properly.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I act responsibly myself and also take reasonable steps to reduce avoidable environmental harm around me.",
        "score": 4
      }
    ]
  },
  {
    "id": "q12",
    "ruleId": "do-no-harm",
    "title": "Scenario 4",
    "story": "You are with people who are casually smoking or using a substance in a way that could easily become a repeated pattern. There is social pressure to join in, and refusing may feel awkward or make you seem less fun in that moment. You know the choice is not only about one occasion, but about how you respond to habits that can become harmful over time.",
    "subdomain": "Smoking / substance use",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I join in without thinking about the harm it may cause.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I know it may be harmful, but I still go along with it mainly because of the social pressure.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I hesitate and try to limit it, but I still do it.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I choose not to join in and protect myself from the harmful pattern.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I refuse the harmful option clearly and choose the healthier path even if it feels socially uncomfortable.",
        "score": 4
      }
    ]
  },
  {
    "id": "q13",
    "ruleId": "treat-equally",
    "title": "Scenario 1",
    "story": "A new person joins your team or group and their background, language, or way of speaking is different from what most people are used to. You can sense that some people are already making quiet assumptions. Your own behaviour in the first few minutes will either reinforce exclusion or help establish equal dignity and respect from the start.",
    "subdomain": "Dignity",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I treat the person as less important or make them feel unwelcome.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I stay polite on the surface but inwardly treat them as less equal.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I remain neutral and distant without making any real effort to treat them fairly.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I treat the person with the same respect and courtesy I would offer anyone else.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I actively help create a respectful and inclusive atmosphere without making the person feel singled out.",
        "score": 4
      }
    ]
  },
  {
    "id": "q14",
    "ruleId": "treat-equally",
    "title": "Scenario 2",
    "story": "During a meeting or group conversation, a few confident people keep dominating the discussion. A quieter person tries several times to contribute but is repeatedly overlooked or interrupted. You can see that the discussion is becoming unbalanced, and you have to decide whether you will let that continue or help restore fairness.",
    "subdomain": "Fairness in discussion",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore it and let the louder people dominate completely.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I notice it is unfair but do nothing about it.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I feel uncomfortable about it, but I stay silent and detached.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I make some space for the quieter person to contribute.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I actively help create a fairer discussion where different voices are respected.",
        "score": 4
      }
    ]
  },
  {
    "id": "q15",
    "ruleId": "treat-equally",
    "title": "Scenario 3",
    "story": "You notice that you have made a quick assumption about someone based on how they look, sound, or what role they have. The assumption comes automatically, and nobody else knows you have made it. In that moment, you can either accept the bias as truth or consciously challenge it before it shapes how you behave.",
    "subdomain": "Bias awareness",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I accept the assumption and behave as if it is probably true.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I keep the bias and let it influence how I treat the person.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I sense the bias but do not really question it.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I catch myself and try to reset my attitude more fairly.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I consciously challenge the assumption and choose a more respectful, fair response.",
        "score": 4
      }
    ]
  },
  {
    "id": "q16",
    "ruleId": "treat-equally",
    "title": "Scenario 4",
    "story": "You strongly disagree with another person's beliefs, choices, or opinions. The disagreement matters to you, and part of you feels tempted to reduce your respect because of it. At the same time, you know that equal dignity should not depend on agreement. The way you respond will show whether your respect is conditional or principled.",
    "subdomain": "Equal respect despite disagreement",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I treat the person with contempt because I disagree with them.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I become noticeably less respectful because of the disagreement.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I stay outwardly civil but inwardly dismiss the person's worth.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I disagree respectfully while still protecting dignity.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I remain both fair and respectful even in serious disagreement because I believe dignity should not depend on agreement.",
        "score": 4
      }
    ]
  },
  {
    "id": "q17",
    "ruleId": "love-yourself-and-all",
    "title": "Scenario 1",
    "story": "You make an embarrassing mistake in front of others and feel the sting of shame immediately. The event is already over, but your mind starts deciding what kind of story to tell you about yourself. One path leads to harsh self-criticism and emotional punishment. The other leads to honesty, kindness, and recovery. Your inner response matters as much as the mistake itself.",
    "subdomain": "Self-compassion",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I attack myself harshly and keep replaying the mistake with self-contempt.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I stay trapped in shame and self-criticism for a long time.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I partly recover, but I remain very hard on myself.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I accept the mistake and respond to myself with some kindness.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I respond with self-compassion, learn from the mistake, and move forward in a balanced way.",
        "score": 4
      }
    ]
  },
  {
    "id": "q18",
    "ruleId": "love-yourself-and-all",
    "title": "Scenario 2",
    "story": "Someone close to you is clearly having a difficult day and is not at their best. They are not being abusive, but they are a bit tense, impatient, or emotionally heavy. You are also not fully rested yourself. In that moment, your response can either add more coldness to the situation or bring a little steadiness and warmth.",
    "subdomain": "Warmth to others",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I react harshly and make the situation more difficult.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I become cold and distant because their mood inconveniences me.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I stay neutral but do not offer any real warmth or patience.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I show some patience and emotional warmth.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I respond with steady kindness and warmth while still keeping healthy boundaries.",
        "score": 4
      }
    ]
  },
  {
    "id": "q19",
    "ruleId": "love-yourself-and-all",
    "title": "Scenario 3",
    "story": "A person disappoints you in a way that hurts more than it may seem on the surface. You cannot change what happened, but you can choose whether to keep feeding resentment or begin a healthier process of letting go. The issue is not whether the event was acceptable, but whether you remain emotionally trapped by it.",
    "subdomain": "Forgiveness",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I hold onto the resentment and keep replaying it intensely.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I stay cold and distant for a long time because of the hurt.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I try to move on, but I continue carrying the resentment inside me.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I begin to let go and try to understand the situation more fairly.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I process the hurt maturely and move toward forgiveness without denying my feelings.",
        "score": 4
      }
    ]
  },
  {
    "id": "q20",
    "ruleId": "love-yourself-and-all",
    "title": "Scenario 4",
    "story": "You feel emotionally drained and you also know that someone around you needs support. If you ignore yourself completely, you may become resentful or collapse into exhaustion. If you ignore them completely, you may harden or withdraw too far. The challenge is not choosing one person over the other, but finding a balanced response that keeps care alive in both directions.",
    "subdomain": "Balanced care",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I neglect both myself and the other person in a chaotic or avoidant way.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I become resentful and respond poorly because I feel drained.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I do the bare minimum while feeling emotionally disconnected.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I try to care for both myself and the other person in a reasonable way.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I respond with balanced care, respecting my limits while still showing meaningful support.",
        "score": 4
      }
    ]
  },
  {
    "id": "q21",
    "ruleId": "eat-healthy-live-healthy",
    "title": "Scenario 1",
    "story": "It has been a busy day and you are hungry, tired, and short on time. An unhealthy convenience option is easy and immediately available, while a more nourishing choice would require a little more intention. You know this is not about one perfect meal but about the repeated pattern your choices create over time. The question is what you actually do in real life when convenience and health compete.",
    "subdomain": "Food",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I choose the least healthy option without giving it any thought.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I mostly choose convenience even when I know it is not good for me.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I make only a partly better choice, but my decision is still mostly driven by convenience.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I make a reasonably healthy choice despite the pressure of the day.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I choose in a way that supports my health and I use the situation to strengthen better food habits over time.",
        "score": 4
      }
    ]
  },
  {
    "id": "q22",
    "ruleId": "eat-healthy-live-healthy",
    "title": "Scenario 2",
    "story": "You are already somewhat tired, but there is still work, entertainment, or scrolling that could keep you up much later than is healthy. Nobody will stop you, and it is easy to tell yourself that losing sleep tonight does not matter much. At the same time, you know that repeated sleep sacrifice affects your mood, patience, concentration, and long-term wellbeing.",
    "subdomain": "Sleep",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore my need for sleep and stay up without limits.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I often sacrifice sleep for low-value reasons even when I know better.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I try to protect sleep sometimes, but I am inconsistent.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I choose rest more often than not because I know it matters.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I deliberately protect healthy sleep because I see it as a core part of living well.",
        "score": 4
      }
    ]
  },
  {
    "id": "q23",
    "ruleId": "eat-healthy-live-healthy",
    "title": "Scenario 3",
    "story": "You are moving through a busy day and realize you have barely had any water. You feel a bit tired and less clear-headed, but it is easy to keep going without paying attention. Hydration is not dramatic, so neglecting it can become normal without much thought. The situation tests whether you notice small but important foundations of health in everyday life.",
    "subdomain": "Hydration",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore hydration and continue the day without caring about it.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I notice it but still do not change anything because it feels unimportant.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I drink something only casually, without much consistency or intention.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I make a point to rehydrate and support my body better.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I respond responsibly and use the moment to maintain a healthier hydration habit through the day.",
        "score": 4
      }
    ]
  },
  {
    "id": "q24",
    "ruleId": "eat-healthy-live-healthy",
    "title": "Scenario 4",
    "story": "You have had a long and demanding day and the easiest option is to become completely inactive for the rest of it. At the same time, you know that some movement would help your energy, body, and emotional state. The issue is not athletic performance but whether you protect a realistic level of physical activity even when motivation is low.",
    "subdomain": "Physical activity",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I stay inactive and do not make any effort to move at all.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I often skip all movement when I feel tired or stressed.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I do only the bare minimum without much real intention.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I still make time for some movement despite the difficult day.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I protect a realistic physical activity habit because I see it as part of living well, not only when it feels easy.",
        "score": 4
      }
    ]
  },
  {
    "id": "q25",
    "ruleId": "financial-freedom",
    "title": "Scenario 1",
    "story": "You are browsing online or walking through a shop and see something attractive that you had not planned to buy. It would feel good to purchase it immediately, and nobody is stopping you. At the same time, you know that repeated impulse decisions often weaken financial stability quietly over time. This moment tests whether you can separate desire from direction.",
    "subdomain": "Impulse spending",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I buy it immediately without thinking further.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I mainly buy it because I want the emotional boost of getting it.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I hesitate but still often give in to the impulse.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I pause and check whether it truly fits my priorities.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I decide based on real value and long-term balance rather than the impulse of the moment.",
        "score": 4
      }
    ]
  },
  {
    "id": "q26",
    "ruleId": "financial-freedom",
    "title": "Scenario 2",
    "story": "A financial obligation is coming due and your money feels tighter than you would like. Part of you wants to avoid looking at the numbers because the situation is uncomfortable. Avoidance would reduce stress for a few minutes, but it could make the real problem worse later. The moment tests whether you face financial reality or retreat from it.",
    "subdomain": "Facing money issues",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I ignore the problem and hope it somehow disappears.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I avoid checking the details because it feels stressful.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I look at the issue but do not make a clear plan.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I face the situation and make a practical short-term response.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I address it calmly and responsibly, using the difficulty to strengthen better financial habits.",
        "score": 4
      }
    ]
  },
  {
    "id": "q27",
    "ruleId": "financial-freedom",
    "title": "Scenario 3",
    "story": "You receive income or money to manage this month. There are several competing demands on it, and if you do not give it structure, it could disappear quickly without supporting your most important needs. Nobody will force you to plan it. The question is whether you create intentional order or drift through spending reactively.",
    "subdomain": "Budgeting",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I spend without tracking or planning anything.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I guess where the money is going but do not manage it properly.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I think about budgeting but apply it inconsistently.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I give the money a clear and practical structure.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I manage it intentionally with awareness of needs, priorities, and future stability.",
        "score": 4
      }
    ]
  },
  {
    "id": "q28",
    "ruleId": "financial-freedom",
    "title": "Scenario 4",
    "story": "You must choose between a short-term pleasure and a more responsible longer-term need. Both options feel real, but one supports stability while the other mainly serves immediate desire. You know this kind of decision shapes the quality of your financial life over time. The situation tests whether your money choices align with peace and values or just with the moment.",
    "subdomain": "Value-based money decisions",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I choose the immediate pleasure without thinking about the long-term effect.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I know the responsible option matters, but I still avoid it for comfort.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I feel split and make an inconsistent or unclear choice.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I usually choose the more responsible longer-term option.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I make the decision in a way that supports peace, stability, and what matters most to me.",
        "score": 4
      }
    ]
  },
  {
    "id": "q29",
    "ruleId": "be-humble",
    "title": "Scenario 1",
    "story": "You are praised publicly for something that went well, but you know that other people also contributed in meaningful ways. In the moment, it would be easy to absorb the praise and let the spotlight stay on you. At the same time, you know that how you handle credit reveals whether you are grounded or ego-driven when things go well.",
    "subdomain": "Receiving praise",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I accept the praise as if the result were mainly mine.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I enjoy the attention and mention others only lightly.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I know I should share credit, but I do it weakly or vaguely.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I acknowledge the contributions of others fairly.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I share credit genuinely and keep the focus balanced instead of making it about myself.",
        "score": 4
      }
    ]
  },
  {
    "id": "q30",
    "ruleId": "be-humble",
    "title": "Scenario 2",
    "story": "Someone gives you feedback about a weakness or mistake in something you did. The feedback may be uncomfortable to hear, and your first inner reaction is to protect yourself. Even so, you know that growth depends on whether you can stay teachable rather than defensive. The situation tests humility under emotional pressure.",
    "subdomain": "Accepting feedback",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I reject the feedback immediately and defend myself strongly.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I become irritated or cold and stop listening properly.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I listen outwardly but resist the message inwardly.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I hear the feedback and consider it seriously.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I receive the feedback with maturity and use it as a chance to learn and improve.",
        "score": 4
      }
    ]
  },
  {
    "id": "q31",
    "ruleId": "be-humble",
    "title": "Scenario 3",
    "story": "In the middle of a conversation or disagreement, you realize that you were mistaken. Nobody is forcing you to admit it clearly, and you could still try to protect your image. At that moment, your response will reveal whether truth matters more to you than ego.",
    "subdomain": "Admitting wrong",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I keep arguing in order to protect my image.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I avoid admitting I was wrong even though I know it.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I partly admit it but still defend myself heavily.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I acknowledge that I was wrong.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I admit it calmly and appreciate being corrected because learning matters more to my ego.",
        "score": 4
      }
    ]
  },
  {
    "id": "q32",
    "ruleId": "be-humble",
    "title": "Scenario 4",
    "story": "A younger, quieter, or less experienced person offers an idea that is genuinely useful. You can feel a subtle temptation to dismiss it because of who it came from, even though the idea itself has value. The situation tests whether your openness to learning depends on status or on truth.",
    "subdomain": "Learning from anyone",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I dismiss the idea because I do not value the person offering it.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I downplay the idea and resist taking it seriously.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I consider it only reluctantly.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I listen openly and use it if it helps.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I value good ideas wherever they come from and respond with genuine openness to learning.",
        "score": 4
      }
    ]
  },
  {
    "id": "q33",
    "ruleId": "stay-calm",
    "title": "Scenario 1",
    "story": "You return home after a draining day with your mind already tense. A small irritation happens almost immediately, and you can feel anger beginning to rise faster than the situation itself really deserves. In that moment, the key question is whether you notice the internal shift early enough to influence what happens next.",
    "subdomain": "Early awareness",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I do not notice my anger until I have already reacted badly.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I notice it only after the emotion has already taken control of me.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I partly notice it, but I am still visibly pulled by it.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I recognize the rising anger early enough to slow myself down.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I notice the trigger and the emotional shift quickly, which helps me stay more balanced from the start.",
        "score": 4
      }
    ]
  },
  {
    "id": "q34",
    "ruleId": "stay-calm",
    "title": "Scenario 2",
    "story": "Someone says something that feels unfair or irritating while you are already under pressure. Your first impulse is to respond immediately and strongly. You know that a few seconds of pause could change the whole direction of the interaction. The moment tests whether you can delay reaction long enough to choose a better one.",
    "subdomain": "Response delay",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I react immediately in anger without pausing.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I respond sharply and only think later about what I said.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I control part of my reaction but still answer in a tense way.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I pause before speaking and give myself some space.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I pause, regulate myself, and then choose a constructive response instead of reacting from impulse.",
        "score": 4
      }
    ]
  },
  {
    "id": "q35",
    "ruleId": "stay-calm",
    "title": "Scenario 3",
    "story": "A disagreement with someone close to you is starting to intensify. Both of you are becoming more emotional, and the conversation is drifting away from the original issue into a struggle for who will win. At this point, your behaviour can either add more fuel or help restore steadiness. The situation tests your ability to choose peace over escalation.",
    "subdomain": "De-escalation",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I keep pushing harder because I want to win the argument.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I continue the conflict even when I can see it is getting worse.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I reduce some intensity but stay locked into the fight.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I make an effort to calm the interaction and lower the tension.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I intentionally de-escalate, protect the relationship, and return the conversation to a steadier tone.",
        "score": 4
      }
    ]
  },
  {
    "id": "q36",
    "ruleId": "stay-calm",
    "title": "Scenario 4",
    "story": "Something frustrating or upsetting happens unexpectedly and disrupts your plans. Even after the event is over, the emotional charge continues to affect your body, mood, and attention. The challenge is no longer the event itself but how long you remain trapped inside it. The moment tests your capacity to recover emotional balance.",
    "subdomain": "Recovery",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I stay upset for a very long time and carry it into everything else.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I remain emotionally affected for hours and struggle to come down.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I recover slowly and with difficulty.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I regain balance reasonably well after some time.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I process what happened, calm myself, and return to steadiness in a healthy and timely way.",
        "score": 4
      }
    ]
  },
  {
    "id": "q37",
    "ruleId": "accept-change",
    "title": "Scenario 1",
    "story": "A plan you were depending on changes suddenly at the last minute. You had mentally prepared for one path, and now you have to deal with a different reality that you did not choose. Frustration is understandable, but the deeper question is whether you can shift with the situation or remain locked into what should have happened.",
    "subdomain": "Flexibility",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I become overwhelmed and cannot adapt at all.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I stay stuck in frustration and resist the change intensely.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I adapt eventually, but only after a lot of emotional struggle.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I adjust with reasonable flexibility once the change is clear.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I adapt thoughtfully and preserve my emotional balance even though I did not want the change.",
        "score": 4
      }
    ]
  },
  {
    "id": "q38",
    "ruleId": "accept-change",
    "title": "Scenario 2",
    "story": "An outcome has happened that you cannot change, no matter how strongly you wish it were different. Part of you wants to keep fighting reality itself, even though doing so only increases emotional pain. The situation tests whether you can distinguish between what should be acted on and what must be accepted with maturity.",
    "subdomain": "Acceptance",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I refuse to accept it and stay trapped in resistance.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I keep replaying how unfair it is without moving forward.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I partly accept it, but I remain mentally stuck for too long.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I begin to accept reality and focus on my next response.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I accept what cannot be changed and redirect my energy wisely toward what I can still do.",
        "score": 4
      }
    ]
  },
  {
    "id": "q39",
    "ruleId": "accept-change",
    "title": "Scenario 3",
    "story": "You worked hard toward something important and it did not turn out as you hoped. The disappointment is real, and it would be easy to stay discouraged or emotionally defeated. Yet this is also the kind of moment that reveals how you recover after loss rather than how you perform when everything goes well.",
    "subdomain": "Recovery after disappointment",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I give up completely and stop engaging.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I stay discouraged and withdraw for a long time.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I recover slowly and only with inconsistency.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I regroup and continue with some resilience.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I recover in a healthy way, learn from the setback, and continue moving forward with perspective.",
        "score": 4
      }
    ]
  },
  {
    "id": "q40",
    "ruleId": "accept-change",
    "title": "Scenario 4",
    "story": "A goal still matters to you, but the original route to reach it is blocked. You can keep focusing on the closed path, or you can redirect yourself toward another workable route. The situation tests not whether change feels comfortable, but whether you can stay purposeful when the exact plan has to change.",
    "subdomain": "Plan B mindset",
    "scenario": true,
    "evidenceTag": "scenario-bank-v69",
    "options": [
      {
        "key": "A",
        "text": "I stay attached to the old plan and do nothing else.",
        "score": 0
      },
      {
        "key": "B",
        "text": "I complain about the loss of the original route but do not adapt.",
        "score": 1
      },
      {
        "key": "C",
        "text": "I think vaguely about alternatives without taking clear action.",
        "score": 2
      },
      {
        "key": "D",
        "text": "I create a practical alternative plan and begin to use it.",
        "score": 3
      },
      {
        "key": "E",
        "text": "I shift to a new route with clarity, flexibility, and emotional steadiness because the purpose matters more than one fixed path.",
        "score": 4
      }
    ]
  }
];
