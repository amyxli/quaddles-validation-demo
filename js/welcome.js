var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = '<b>“Wubbel-Rating”</b> is a short psychological study investigating how people make decisions.';
welcome.task.time = '10-12 minutes';
welcome.task.pay = 'US$2.00';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.name = '“Wubbel-Rating”';
welcome.ethics.information = 'Herzlich willkommen zu unserer Studie. Wir danken Ihnen sehr für Ihr Interesse an unserer Forschung. In unserer Studie wollen wir verschiedene Komponenten des Gedächtnisses über die Lebensspanne untersuchen. Dazu gehören unter anderem die Rolle bereits vorhandenen Wissens bei der Verarbeitung von neuen Informationen, die Überführung neuer Erfahrungen ins Gedächtnis (Konsolidierung), sowie das Wiederabrufen von Informationen, welche für unsere Sinne nicht mehr zugänglich sind. Hierfür vergleichen wir Daten von Kindern und Erwachsenen frühen bis höheren Lebensalters. Dazu werden Sie in dieser Studiensitzung Aufgaben am Computer lösen. Sie werden sich verschiedene Objekte ansehen und diese nach ihrer Ähnlichkeit mit anderen Objekten bewerten.';
welcome.ethics.ablauf = 'Diese Online-Studie dauert etwa eine halbe Stunde. Ziel dieser Studie ist, verschiedene Objekte zu vergleichen. Zunächst erhalten Sie Informationen über die zu bewertenden Objekte. Anschließend werden Sie die Objekte nach Ihrer Ähnlichkeit mit anderen Objekten bewerten. Dies geschieht mit Hilfe eines Schiebereglers, den Sie mit der Computermaus nach links oder rechts verschieben können.';

// ----------------------- function to start the task ------------------
welcome.run = function() {
    document.getElementById("welcome").innerHTML =
        welcome.section.header +
        welcome.section.start +
        welcome.section.consent +
        welcome.section.demographics;
}

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.consent = function() {
    welcome.helpers.setDisplay('consent', 'none');
    welcome.helpers.setDisplay('demographics', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.demographics = function() {
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        country: document.getElementById("country").value,
        handedness: document.getElementById("handedness").value,
        vision: document.getElementById("vision").value,
        colour: document.getElementById("colour").value,
        education: document.getElementById("education").value,
});

if (
    (document.getElementById("gender").value !== '') &&
    (document.getElementById("age").value !== '') &&
    (document.getElementById("dob").value !== '') &&
    (document.getElementById("country").value !== '') &&
    (document.getElementById("handedness").value !== '')  &&
    (document.getElementById("vision").value !== '') &&
    (document.getElementById("colour").value !== '') &&
    (document.getElementById("education").value !== '') 
    ) {
        welcome.helpers.setDisplay('demographics', 'none');
        welcome.helpers.setDisplay('header', 'none');
        startExperiment(); // start the jsPsych experiment
        } else {
        alert('Bitte füllen Sie zuerst alle Felder aus.');
        return;
        }
    }
// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h2 style="text-align:center; width:1000px" id="header" class="header">' +
    '   &nbsp;Goethe-Universität Frankfurt am Main – Institut für Psychologie </h1>';

welcome.section.start =
    '<!-- ####################### Start page ####################### -->' +
    '<div class="start" style="width: 900px">' +
    '<div class="start" style="text-align:left; border:0px solid; padding:10px;' +
    '                          width:800px; float:right; font-size:90%">' +
    '<p align="center">Wilkommen zum Wubbel-Rating</p> <br>' +
    '<!-- Next button for the splash page -->' +
    '<p align="center" > <input type="button" id="splashButton" class="start jspsych-btn" ' +
    'value="Start!" onclick="welcome.click.start()"> </p>' +
    '</div>' +
    '</div>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="display:none; width:900px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<p align="center"><b>Goethe-Universität Frankfurt am Main – Institut für Psychologie<br>' +
    '			</b><br>' + welcome.ethics.name + '</p>' +
    '			<p><b>Studieninformation</b></p>' +
    '			<p>' + welcome.ethics.information + '</p>' +
    '			<p><b>Ablauf</b></p>' +
    '			<p>' + welcome.ethics.ablauf + '</p>' +
    '			<p><b>Vergütung</b></p>' +
    '			<p>Für die Teilnahme an dieser Studie erhalten Sie den Konditionen von Amazon Mturk entsprechend 4€/halbe Stunde.</p>' +
    '			<p><b>Freiwilligkeit und Anonymität (cf. EU GDPR 2016/679)</b></p>' +
    '			<p>Die Teilnahme an der Studie ist freiwillig. Sie können jederzeit und ohne Angabe von Gründen Ihre Einwilligung zur Teilnahme an dieser Studie widerrufen, ohne dass Ihnen daraus Nachteile entstehen. Auch wenn Sie die Studie vorzeitig abbrechen, haben Sie Anspruch auf eine entsprechende Vergütung.</p>' +
    '			<p><b>Einverständniserklärung und Datenschutzerklärung</b></p>' +
    '			<p>Die Goethe-Universität Frankfurt am Main ist eine Einrichtung zur Förderung der Wissenschaft. Unsere Arbeit folgt streng den Bestimmungen des Datenschutzes. Die im Rahmen der Studie erbetenen Angaben unterliegen der Schweigepflicht und werden unter Wahrung der Bestimmungen des Datenschutzgesetzes gespeichert und wissenschaftlich ausgewertet. Die Weitergabe personenbezogener Daten an Dritte erfolgt nicht. Die Daten werden ausschließlich zu Forschungszwecken verwendet. Die Daten werden innerhalb der Goethe-Universität Frankfurt am Main bzw. von Kooperationspartner*innen der Goethe-Universität Frankfurt am Main verwendet. Im Rahmen von Kooperationen werden nur anonymisierte und keine persönlichen Daten die Goethe-Universität verlassen. Die Daten werden unter Umständen anonymisiert in wissenschaftlichen Zeitschriften sowie in öffentlichen Repositorien veröffentlicht. Repositorien sind an Universitäten oder Forschungseinrichtungen betriebene Dokumentenserver, auf denen wissenschaftliche Materialien archiviert und weltweit entgeltfrei zugänglich gemacht werden. Es werden keine individuellen Daten in diesen Repositorien veröffentlicht, sondern nur Zusammenfassungen über Datensätze mehrerer Versuchsteilnehmer*innen.</p>' +
    '           <p>Falls personenbezogene Kontaktdaten erhoben werden, werden sie getrennt von Untersuchungsdaten gespeichert und streng vertraulich behandelt. Sie können die Einwilligung zur Verwendung der erfassten Daten jederzeit mit Wirkung für die Zukunft widerrufen. Die Erhebung der Daten erfolgt anonymisiert, d.h. in namentlich nicht gekennzeichneter Form. Ihre Antworten und Ergebnisse werden unter einer Nummer gespeichert. Die anonymisierten Daten werden 30 Jahre lang gespeichert.</p>' +
    '           <p>Durch Ihre Zustimmung willigen Sie ein, dass Sie an der Studie im Umfang von etwa einer halben Stunde teilnehmen.</p>' +
    '           <li>Ich wurde von dem oben aufgeführten Text über Wesen, Bedeutung und Tragweite der Untersuchung aufgeklärt. Ich habe den Aufklärungstext gelesen und verstanden. Ich hatte die Möglichkeit, Fragen zu stellen (siehe Kontaktdaten) und habe die Antworten verstanden und akzeptiere sie.</li>' +
    '           <li>Ich hatte ausreichend Zeit, mich zur Teilnahme an dieser Untersuchung zu entscheiden und weiß, dass die Teilnahme freiwillig ist. Ich weiß, dass ich jederzeit und ohne Angaben von Grün¬den diese Zustimmung widerrufen kann, ohne dass sich dieser Entschluss nachteilig auswirken wird.</li>' +
    '           <li>Ich habe den oben aufgeführten Text gelesen und verstanden. Ich habe die  Bedingungen zur Kenntnis genommen und bin damit einverstanden, dass ich an dieser Studie teilnehme. (<i>erforderlich für Studienteilnahme</i>).</li>' +
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="Ich stimme zu" onclick="welcome.click.consent()" >' +
    '			</p>' +
    '			<p><b>Kontaktinformation</b></p>' +
    '           <p>Prof. Dr. Yee Lee Shing <br>Institut für Psychologie <br>Arbeitseinheit Entwicklungspsychologie <br>Goethe-Universität Frankfurt am Main <br>PEG-Gebäude, Raum 5.G089 <br>Theodor-W.-Adorno-Platz 6 <br>D-60629 Frankfurt am Main <br>Shing@psych.uni-frankfurt.de <br>' +
    '			<b>Tel: +49 (0)69/798-35258 </b> </p>' +
    '		</div><br><br></div>';

welcome.section.demographics =
    '	<!-- ####################### Demographics ####################### -->' +
    '	<div class="demographics" style="display:none; align:center; width: 1000px">' +
    '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<!-- Explanatory text -->' +
    '            <p font-size:130%>Bitte füllen Sie folgende Felder aus:</p>' +
    '			<!-- Gender -->' +
    '			<label for="gender"><b>Geschlecht &nbsp;</b></label>  ' +
    '           <select name="gender" id="gender" class="drop-menu">' +
    '<option>weiblich</option><option>männlich</option><option>divers</option></select>' +
    '		<br><br>' +
    '			<!-- Age -->' +
    '           <label for="age"><b>Alter: &nbsp;</b></label><input id="age" name="age" /><br /><br />' +
    '           <!-- DOB -->' +
    '           <label for="dob"><b>Geburtsdatum (TT.MM.JJJJ): &nbsp;</b></label><input id="dob" name="dob" /><br /><br />' +
    '			<!-- Country -->' +
    '			<label for="country"><b>Wohnort: &nbsp;</b></label>  ' +
    '           <select name="country" id="country" class="drop-menu">' +
    '<option>Afghanistan</option><option>&Aring;land Islands</option><option>Albania</option><option>Algeria</option><option>American Samoa</option><option>Andorra</option><option>Angola</option><option>Anguilla</option><option>Antarctica</option><option>Antigua and Barbuda</option><option>Argentina</option><option>Armenia</option><option>Aruba</option><option>Australia</option><option>Austria</option><option>Azerbaijan</option><option>Bahamas</option><option>Bahrain</option><option>Bangladesh</option><option>Barbados</option><option>Belarus</option><option>Belgium</option><option>Belize</option><option>Benin</option><option>Bermuda</option><option>Bhutan</option><option>Bolivia</option><option>Bosnia and Herzegovina</option><option>Botswana</option><option>Bouvet Island</option><option>Brazil</option><option>British Indian Ocean territory</option><option>Brunei Darussalam</option><option>Bulgaria</option><option>Burkina Faso</option><option>Burundi</option><option>Cambodia</option><option>Cameroon</option><option>Canada</option><option>Cape Verde</option><option>Cayman Islands</option><option>Central African Republic</option><option>Chad</option><option>Chile</option><option>China</option><option>Christmas Island</option><option>Cocos (Keeling) Islands</option><option>Colombia</option><option>Comoros</option><option>Congo</option><option>Congo, Democratic Republic</option><option>Cook Islands</option><option>Costa Rica</option><option>C&ocirc;te d&#8217;Ivoire (Ivory Coast)</option><option>Croatia (Hrvatska)</option><option>Cuba</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Djibouti</option><option>Dominica</option><option>Dominican Republic</option><option>East Timor</option><option>Ecuador</option><option>Egypt</option><option>El Salvador</option><option>Equatorial Guinea</option><option>Eritrea</option><option>Estonia</option><option>Ethiopia</option><option>Falkland Islands</option><option>Faroe Islands</option><option>Fiji</option><option>Finland</option><option>France</option><option>French Guiana</option><option>French Polynesia</option><option>French Southern Territories</option><option>Gabon</option><option>Gambia</option><option>Georgia</option><option selected="selected">Germany</option><option>Ghana</option><option>Gibraltar</option><option>Greece</option><option>Greenland</option><option>Grenada</option><option>Guadeloupe</option><option>Guam</option><option>Guatemala</option><option>Guinea</option><option>Guinea-Bissau</option><option>Guyana</option><option>Haiti</option><option>Heard and McDonald Islands</option><option>Honduras</option><option>Hong Kong</option><option>Hungary</option><option>Iceland</option><option>India</option><option>Indonesia</option><option>Iran</option><option>Iraq</option><option>Ireland</option><option>Israel</option><option>Italy</option><option>Jamaica</option><option>Japan</option><option>Jordan</option><option>Kazakhstan</option><option>Kenya</option><option>Kiribati</option><option>Korea (north)</option><option>Korea (south)</option><option>Kuwait</option><option>Kyrgyzstan</option><option>Lao People&#8217;s Democratic Republic</option><option>Latvia</option><option>Lebanon</option><option>Lesotho</option><option>Liberia</option><option>Libyan Arab Jamahiriya</option><option>Liechtenstein</option><option>Lithuania</option><option>Luxembourg</option><option>Macao</option><option>Macedonia, Former Yugoslav Republic Of</option><option>Madagascar</option><option>Malawi</option><option>Malaysia</option><option>Maldives</option><option>Mali</option><option>Malta</option><option>Marshall Islands</option><option>Martinique</option><option>Mauritania</option><option>Mauritius</option><option>Mayotte</option><option>Mexico</option><option>Micronesia</option><option>Moldova</option><option>Monaco</option><option>Mongolia</option><option>Montenegro</option><option>Montserrat</option><option>Morocco</option><option>Mozambique</option><option>Myanmar</option><option>Namibia</option><option>Nauru</option><option>Nepal</option><option>Netherlands</option><option>Netherlands Antilles</option><option>New Caledonia</option><option>New Zealand</option><option>Nicaragua</option><option>Niger</option><option>Nigeria</option><option>Niue</option><option>Norfolk Island</option><option>Northern Mariana Islands</option><option>Norway</option><option>Oman</option><option>Pakistan</option><option>Palau</option><option>Palestinian Territories</option><option>Panama</option><option>Papua New Guinea</option><option>Paraguay</option><option>Peru</option><option>Philippines</option><option>Pitcairn</option><option>Poland</option><option>Portugal</option><option>Puerto Rico</option><option>Qatar</option><option>R&eacute;union</option><option>Romania</option><option>Russian Federation</option><option>Rwanda</option><option>Saint Helena</option><option>Saint Kitts and Nevis</option><option>Saint Lucia</option><option>Saint Pierre and Miquelon</option><option>Saint Vincent and the Grenadines</option><option>Samoa</option><option>San Marino</option><option>Sao Tome and Principe</option><option>Saudi Arabia</option><option>Senegal</option><option>Serbia</option><option>Seychelles</option><option>Sierra Leone</option><option>Singapore</option><option>Slovakia</option><option>Slovenia</option><option>Solomon Islands</option><option>Somalia</option><option>South Africa</option><option>South Georgia and the South Sandwich Islands</option><option>Spain</option><option>Sri Lanka</option><option>Sudan</option><option>Suriname</option><option>Svalbard and Jan Mayen Islands</option><option>Swaziland</option><option>Sweden</option><option>Switzerland</option><option>Syria</option><option>Taiwan</option><option>Tajikistan</option><option>Tanzania</option><option>Thailand</option><option>Togo</option><option>Tokelau</option><option>Tonga</option><option>Trinidad and Tobago</option><option>Tunisia</option><option>Turkey</option><option>Turkmenistan</option><option>Turks and Caicos Islands</option><option>Tuvalu</option><option>Uganda</option><option>Ukraine</option><option>United Arab Emirates</option><option>United Kingdom</option><option>United States of America</option><option>Uruguay</option><option>Uzbekistan</option><option>Vanuatu</option><option>Vatican City</option><option>Venezuela</option><option>Vietnam</option><option>Virgin Islands (British)</option><option>Virgin Islands (US)</option><option>Wallis and Futuna Islands</option><option>Western Sahara</option><option>Yemen</option><option>Zaire</option><option>Zambia</option><option>Zimbabwe</option></select>' +
    '		<br><br>' +
    '			<!-- Handedness -->' +
    '			<label for="Handedness"><b>Händigkeit: &nbsp;</b></label>  ' +
    '           <select name="handedness" id="handedness" class="drop-menu">' +
    '<option>rechts</option><option>links</option><option>beihandig</option></select>' +
    '		<br><br>' +
    '			<!-- Vision -->' +
    '			<label for="Vision"><b>Tragen Sie eine Brille/Kontaktlinsen für volle Sehkraft? &nbsp;</b></label>  ' +
    '           <select name="vision" id="vision" class="drop-menu">' +
    '<option>ja</option><option>nein</option></select>' +
    '		<br><br>' +
    '			<!-- Red green colour deficiency -->' +
    '			<label for="colour"><b>Haben Sie eine Rot-Grün-Sehschwäche? &nbsp;</b></label>  ' +
    '           <select name="colour" id="colour" class="drop-menu">' +
    '<option>ja</option><option>nein</option></select>' +
    '		<br><br>' +
    '			<!-- Highest level of education -->' +
    '			<label for="Education"><b>Was ist Ihr höchster Bildungsabschluss? &nbsp;</b></label>  ' +
    '           <select name="education" id="education" class="drop-menu">' +
    '<option>kein Abschluss</option><option>Hauptschule</option><option>Realschule</option><option>Abitur</option><option>Hochschulstudium</option><option>Promotion</option></select>' +
    '		<br><br>' +
    '		<!-- Demographics  button -->' +
    '        <p align="center">' +
    '                <input type="button" class="demographics jspsych-btn"' +
    '                        id="demographicsButton" value="Weiter >"' +
    '                       onclick="welcome.click.demographics()">' +
    '       </p></div>';
  
// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
}
welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
}
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
}
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
}
