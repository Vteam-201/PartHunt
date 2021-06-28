/* eslint-disable space-in-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
{

  ////////////////////////////////////////////////////////////////////////////
  // city_state.js ///////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  let countries = Object();

  countries['Middle East'] = '|Afghanistan|Armenia|Azerbaijan|Bahrain|Cyprus|Iran|Iraq|Palestin|Jordan|Kuwait|Kyrgyzstan|Lebanon|Oman|Pakistan|Qatar|Saudi Arabia|Syria|Tajikistan|Turkey|Turkmenistan|United Arab Emirates|Uzbekistan|Yemen';

  let city_states = Object();
  city_states['Afghanistan'] = '|Kabul||Badakhshan|Badghis|Baghlan|Balkh|Bamian|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Khowst|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Nurestan|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol';
  city_states['Armenia'] = '|Yerevan||Aragatsotn|Ararat|Armavir|Geghark unik |Kotayk |Lorri|Shirak|Syunik |Tavush|Vayots  Dzor';
  city_states['Azerbaijan'] = '|Baku (Baki)||Abseron|Agcabadi|Agdam|Agdas|Agstafa|Agsu|Ali Bayramli|Astara|Balakan|Barda|Beylaqan|Bilasuvar|Cabrayil|Calilabad|Daskasan|Davaci|Fuzuli|Gadabay|Ganca|Goranboy|Goycay|Haciqabul|Imisli|Ismayilli|Kalbacar|Kurdamir|Lacin|Lankaran|Lankaran|Lerik|Masalli|Mingacevir|Naftalan|Naxcivan|Neftcala|Oguz|Qabala|Qax|Qazax|Qobustan|Quba|Qubadli|Qusar|Saatli|Sabirabad|Saki|Saki|Salyan|Samaxi|Samkir|Samux|Siyazan|Sumqayit|Susa|Susa|Tartar|Tovuz|Ucar|Xacmaz|Xankandi|Xanlar|Xizi|Xocali|Xocavand|Yardimli|Yevlax|Yevlax|Zangilan|Zaqatala|Zardab';
  city_states['Bahrain'] = '|Manama||Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa  wa al Mintaqah al Janubiyah|Jidd Hafs|Madinat Hamad|Madinat  Isa|Juzur Hawar|Sitrah';
  city_states['Cyprus'] = '|Nicosia||Famagusta|Kyrenia|Larnaca|Limassol|Paphos';
  city_states['Iran'] = '|Tehran||Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohkiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Yazd|Zanjan';
  city_states['Iraq'] = '|Baghdad||Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta mim|Babil|Dahuk|Dhi Qar|Diyala|Karbala |Maysan|Ninawa|Salah ad Din|Wasit';
  city_states['Palestin'] = '|al-Quds||Central|Haifa|Northern|Southern|Tel Aviv';
  city_states['Jordan'] = '|Amman||Ajlun|Al  Aqabah|Al Balqa |Al Karak|Al Mafraq|At Tafilah|Az Zarqa |Irbid|Jarash|Ma an|Madaba';
  city_states['Kuwait'] = '|Kuwait||Al Ahmadi|Al Farwaniyah|Al  Asimah|Al Jahra |Hawalli';
  city_states['Kyrgyzstan'] = '|Bishkek Shaary||Batken Oblasty|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)';
  city_states['Lebanon'] = '|Beirut||Beyrouth|Beqaa|Liban-Nord|Liban-Sud|Mont-Liban|Nabatiye';
  city_states['Oman'] = '|Muscat||Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Musandam|Zufar';
  city_states['Pakistan'] = '|Islamabad||Balochistan|Federally Administered Tribal Areas|North-West Frontier Province|Punjab|Sindh';
  city_states['Qatar'] = '|Doha||Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal';
  city_states['Saudi Arabia'] = '|Riyadh||Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)| Asir|Ha il|Jizan|Makkah|Najran|Tabuk';
  city_states['Syria'] = '|Damascus||Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda |Dar a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus';
  city_states['Tajikistan'] = '|Dushanbe||Viloyati Mukhtori Kuhistoni Badakhshon|Viloyati Khatlon|Viloyati Sughd';
  city_states['Turkey'] = '|Ankara||Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak  Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon';
  city_states['Turkmenistan'] = '|Ashgabat||Ahal Welayaty|Balkan Welayaty|Dasoguz Welayaty|Labap Welayaty|Mary Welayaty';
  city_states['United Arab Emirates'] = '|Abu Dhabi||Abu Zaby (Abu Dhabi)| Ajman|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ra s al Khaymah|Umm al Qaywayn';
  city_states['Uzbekistan'] = '|Tashkent (Toshkent)||Andijon Viloyati|Buxoro Viloyati|Farg ona Viloyati|Jizzax Viloyati|Namangan Viloyati|Navoiy Viloyati|Qashqadaryo Viloyati (Qarshi)|Qaraqalpog iston Respublikasi|Samarqand Viloyati|Sirdaryo Viloyati (Guliston)|Surxondaryo Viloyati (Termiz)|Toshkent Shahri|Toshkent Viloyati|Xorazm Viloyati (Urganch)';
  city_states['Yemen'] = '|Sanaa||Abyan| Adan|Al Bayda |Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadramawt|Hajjah|Ibb|Lahij|Ma rib|Sa dah|San a |Shabwah|Ta izz';

  function setRegions()
  {
    for ( region in countries )
      document.write( '<option value="' + region + '">' + region + '</option>' );
  }

  function set_country( oRegionSel, oCountrySel, oCity_StateSel )
  {
    let countryArr;
    oCountrySel.length = 0;
    oCity_StateSel.length = 0;
    let region = oRegionSel.options[oRegionSel.selectedIndex].text;
    if ( countries[region] )
    {
      oCountrySel.disabled = false;
      oCity_StateSel.disabled = true;
      oCountrySel.options[0] = new Option( 'SELECT COUNTRY','' );
      countryArr = countries[region].split( '|' );
      for ( let i = 0; i < countryArr.length; i++ )
        oCountrySel.options[i + 1] = new Option( countryArr[i], countryArr[i] );
      document.getElementById( 'txtregion' ).innerHTML;
      document.getElementById( 'txtplacename' ).innerHTML;
    }
    else oCountrySel.disabled = true;
  }

  function set_city_state( oCountrySel, oCity_StateSel )
  {
    let city_stateArr;
    oCity_StateSel.length = 0;
    let country = oCountrySel.options[oCountrySel.selectedIndex].text;
    if ( city_states[country] )
    {
      oCity_StateSel.disabled = false;
      oCity_StateSel.options[0] = new Option( 'SELECT CITY','' );
      city_stateArr = city_states[country].split( '|' );
      for ( let i = 0; i < city_stateArr.length; i++ )
        oCity_StateSel.options[i + 1] = new Option( city_stateArr[i],city_stateArr[i] );
      document.getElementById( 'txtplacename' ).innerHTML ;
    }
    else oCity_StateSel.disabled = true;
  }

  function print_city_state( oCountrySel, oCity_StateSel )
  {
    let country = oCountrySel.options[oCountrySel.selectedIndex].text;
    let city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;
    if ( city_state && city_states[country].indexOf( city_state ) != -1 )
      document.getElementById( 'txtplacename' ).innerHTML ;
    else document.getElementById( 'txtplacename' ).innerHTML = country;
  }


}
let expanded = false;
function showCheckboxes() {
  // eslint-disable-next-line space-in-parens
  let checkboxes = document.getElementById('checkboxes');
  if (!expanded) {
    checkboxes.style.display = 'block';
    expanded = true;
  } else {
    checkboxes.style.display = 'none';
    expanded = false;
  }

}
// function agefinding()
//     {
//         let birthDay = document.getElementById('datemin').value;
//         let DOB = new Date(birthDay);
//         let today = new Date();
//         let age = today.getTime() - DOB.getTime();
//         age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
//        alert(age);



//         addEventListener('date','datemin');
//         console.log(age)
//     }
