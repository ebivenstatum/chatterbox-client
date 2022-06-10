// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', 'GITHUB_API_TOKEN');
});

// Put your campus prefix here
window.CAMPUS = 'FILL_ME_IN';

// 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 github tokem
