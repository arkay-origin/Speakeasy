/* Honest notes on lessons where computer voices cannot show the feature being taught. */
const AUD=(what,tip)=>'<div class="box tip"><b>&#128264; About the audio</b><p>Computer voices read every sentence with a neutral melody, so they can’t show '+what+'. '+tip+'</p></div>';
const AUDIO_NOTES={
 r5:AUD('which word is stressed — all five versions of the example will sound almost the same','Use the CAPITAL letters to see the stressed word, say it yourself with extra force, and listen for it in real conversations.'),
 i3:AUD('the difference between a rising and a falling tag question','Use the arrows (↗ ↘) as your guide, and listen for tags and “eh?” in Canadian TV, podcasts and everyday conversation.'),
 i4:AUD('the difference between a flat voice and a warm, friendly one','Try the examples yourself both ways, and notice how friendly Canadians sound at stores and on the phone.'),
 x10:AUD('feelings like happiness, boredom or sarcasm','The descriptions tell you how each version should sound. Practise both versions out loud, and listen for sarcasm in Canadian comedies and conversations.')
};
