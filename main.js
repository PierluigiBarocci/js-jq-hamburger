// Partendo dai file che trovate in questa repo: https://bitbucket.org/booleancareers/ex-hamburger-menu-base
// aggiungere le istruzioni jQuery necessarie e sufficienti per attivare l'hamburger menu.
// La struttura html e lo stile presente contengono già tutto l'occorrente per l'hamburger menu, ciò che dovete fare è capire com'è predisposto il tutto e incastrare le istruzioni js corrette per mostrare e nascondere l'hamburger menu su mobile.
// Nome repo: js-jq-hamburger


// il selector per l'hamburger da clickare:   .header-right > a
// il selector per il menu che deve apparire:   .hamburger-menu
// il selector per la X che deve chiudere .hamburger-menu:    .close

$('.header-right > a').click(function(){
    $('.hamburger-menu').show();
});
$('.close').click(function(){
    $('.hamburger-menu').hide();
});
