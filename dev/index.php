<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  </head>
  
  <body>
    <div id="container">
    <?php
      
    ?>
    <!-- Start of intro -->
    <div id="intro" class="hidden-field page">
      <div id="logo">
        <a href="/"></a>
      </div>
      <p>
        Thank you for you continued support of the Seattle Times Education Lab. Your input is valuable to us and will be used to provide stronger, more relevant coverage of education and other issues. We’d like to invite you now to participate in a brief exercise that will help us better understand the impact that Education Lab is having with readers. This exercise should take about 15 minutes to complete. Participants who complete the rating by DATE TK will be entered in a drawing, to be held DATE TK, to win an Apple iPad.
        
        “Education Lab” is a Seattle Times initiative to tell stories about public education issues in Washington state. We’d like to better understand how these stories are serving the community.
        
        If you'd like to participate, you'll be asked to read a Seattle Times education story and share your thoughts about it.
      </p>
      <div class="prompt">
        <p>
          While you fill in the questionnaire or highlight the article, please DO NOT refresh your webpage, because your prior work will be lost. If you wish to reset your answer, please use the RESET button.
        </p>
        <strong id="input-prompt"> Here is the link to the story you are going to analyze. </strong> <br />
      </div>
      <input id="url-box" name="url" type="text" size="150" /> <br/>
      <div class="next-box">
        <button id="goto-article" class="next" type="button"> Start reading the story </button>
      </div>
    </div>
    
    <!-- Start of article -->
    <div id="article" class="hidden-field page">
      <div class="prompt">
        <h1> Article </h1>
        Please read the following article <b>once</b> and hit the button when finished.
      </div>
      <div class="article-box">
        <div class="at-hl"> </div>
        <div class="at-ct">  </div>
      </div>
      <div class="next-box">
        <button id="goto-question" class="next" type="button"> I've finished reading the story. Bring me to the questions. </button>
      </div>
    </div>
    
    <!-- Start of question -->
    
    <div id="question" class="hidden-field page">
      Please answer the following questions based on your reading of the story. Click on the “Tell Me More” button at the end of each question for an explanation.
      <div class="question-box">
        <!--   BEGINNING OF GOOGLE FORM -->
        <div id="gform-container">          
          <form action=
                "https://docs.google.com/forms/d/13EyHZbX1Ln3M4Wqrl1dl8C8qiLt8cjL4ip00A016MI8/formResponse"
                id="ss-form-fake" method="post" name="ss-form" onsubmit="" target="_self">
            <div style="margin-left: 2em; padding-left: 0">
              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-item-required ss-radio" dir="ltr">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for=
                           "entry_1094508028"></label>

                    <div class="ss-q-title">
                      <span class="ss-missing-item"> * </span>
                      <label class="ss-q-item-label" for=
                             "entry_1094508028">Does the story explain the causes of a problem? <label for="itemView.getDomIdToLabel()"></label></label>
                      <div class="questionMark button-style" myname="tmm1"/> Tell me more </div>
                    </div>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                    </div>

                    <ul class="ss-choices">
                      <li class="ss-choice-item"><label><span class=
                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1897914240_1" name="entry.1897914240"
                                                                                                                required="" type="radio" value="No"></span>
                          <span class=
                                "ss-choice-label">No</span></label></li>

                      <li class="ss-choice-item"><label><span class=
                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1897914240_2" name="entry.1897914240"
                                                                                                                required="" type="radio" value="Somewhat"></span>
                          <span class=
                                "ss-choice-label">Somewhat</span></label></li>

                      <li class="ss-choice-item"><label><span class=
                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1897914240_3" name="entry.1897914240"
                                                                                                                required="" type="radio" value="Clearly"></span>
                          <span class=
                                "ss-choice-label">Clearly</span></label></li>
                    </ul>

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>

              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-item-required ss-radio" dir="ltr">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for=
                           "entry_678625221"></label>

                    <div class="ss-q-title">
                      <span class="ss-missing-item"> * </span>
                      <label class="ss-q-item-label" for="entry_678625221">Does the story present an associated solution to that problem?
                        <label for= "itemView.getDomIdToLabel()"></label>
                      </label>
                      <div class="questionMark button-style" myname="tmm2"> Tell me more </div> 
                    </div>

                    <ul class="ss-choices">
                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block">
                            <input class="ss-q-radio" id="group_1841201727_1" name="entry.1841201727" required="" type="radio" value="No"></span>
                          <span class=
                                "ss-choice-label">No</span></label></li>

                      <li class="ss-choice-item"><label><span class=
                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1841201727_2" name="entry.1841201727"
                                                                                                                required="" type="radio" value="Somewhat"></span>
                          <span class=
                                "ss-choice-label">Somewhat</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1841201727_3" name="entry.1841201727"
                                                                                                                required="" type="radio" value="Clearly"></span>
                          <span class=                                "ss-choice-label">Clearly</span></label></li>
                    </ul>

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>


              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-item-required ss-radio" dir="ltr">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for=
                           "entry_1391431169"></label>

                    <div class="ss-q-title">
                      <span class="ss-missing-item"> * </span>
                      <label class="ss-q-item-label" for=
                             "entry_1391431169">Does the story address the problem solving and how-to details of implementation? <label for="itemView.getDomIdToLabel()"></label> 
                      </label>
                      <div class="questionMark button-style" myname="tmm3"> Tell me more </div>
                    </div>

                    <ul class="ss-choices">
                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_362919179_1" name="entry.362919179"
                                                                                                                required="" type="radio" value="No"></span>
                          <span class=                                "ss-choice-label">No</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_362919179_2" name="entry.362919179"
                                                                                                                required="" type="radio" value="Somewhat"></span>
                          <span class=                                "ss-choice-label">Somewhat</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_362919179_3" name="entry.362919179"
                                                                                                                required="" type="radio" value="Clearly"></span>
                          <span class=                                "ss-choice-label">Clearly</span></label></li>
                    </ul>

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>
              
              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-item-required ss-radio" dir="ltr">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for=
                           "entry_1877404981"></label>

                    <div class="ss-q-title">
                      <span class="ss-missing-item"> * </span>
                      <label class="ss-q-item-label" for=
                             "entry_1877404981">Does the story present results, or indications of progress, linked to the solution? <label for=
                                                  "itemView.getDomIdToLabel()"></label> </label>
                      <div class="questionMark button-style" myname="tmm4"> Tell me more </div>
                    </div>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                    </div>

                    <ul class="ss-choices">
                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_117507810_1" name="entry.117507810"
                                                                                                                required="" type="radio" value="No"></span>
                          <span class=                                "ss-choice-label">No</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_117507810_2" name="entry.117507810"
                                                                                                                required="" type="radio" value="Somewhat"></span>
                          <span class=                                "ss-choice-label">Somewhat</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block">
                            <input class="ss-q-radio" id="group_117507810_3" name="entry.117507810" required="" type="radio" value="Clearly"></span>
                          <span class=                                "ss-choice-label">Clearly</span></label></li>
                    </ul>

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>

              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-item-required ss-radio" dir="ltr">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for=
                           "entry_1778185767"></label>

                    <div class="ss-q-title">
                      <span class="ss-missing-item"> * </span>
                      <label class="ss-q-item-label" for=
                             "entry_1778185767">Does the story convey an insight or teachable lesson?<label for=
                                                               "itemView.getDomIdToLabel()"></label></label>
                      <div class="questionMark button-style" myname="tmm5"> Tell me more </div>
                    </div>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                    </div>

                    <ul class="ss-choices">
                      <li class="ss-choice-item"><label><span class= "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1540894643_1" name="entry.1540894643"
                                                                                                                required="" type="radio" value="No"></span>
                          <span class=                                "ss-choice-label">No</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1540894643_2" name="entry.1540894643"
                                                                                                                required="" type="radio" value="Somewhat"></span>
                          <span class=                                "ss-choice-label">Somewhat</span></label></li>

                      <li class="ss-choice-item"><label><span class=                                                              "ss-choice-item-control goog-inline-block"><input class="ss-q-radio"
                                                                                                                id="group_1540894643_3" name="entry.1540894643"
                                                                                                                required="" type="radio" value="Clearly"></span>
                          <span class=                                "ss-choice-label">Clearly</span></label></li>
                    </ul>

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>


              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-text" dir="ltr">
                  <div class="ss-form-entry hidden-field">
                    <label class="ss-q-item-label" for=
                           "entry_842954229"></label>

                    <div class="ss-q-title">
                      <label class="ss-q-item-label" for=
                             "entry_842954229">article_url</label>
                    </div><label class="ss-q-item-label" for=
                                 "entry_842954229"></label>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                      <label class="ss-q-item-label" for=
                             "entry_842954229"></label>
                    </div><input class="ss-q-short" dir="auto" id=
                                 "entry_842954229" name="entry.842954229" title="" type=
                                 "text" value="">

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>

              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-text" dir="ltr">
                  <div class="ss-form-entry hidden-field">
                    <label class="ss-q-item-label" for=
                           "entry_2146594322"></label>

                    <div class="ss-q-title">
                      <label class="ss-q-item-label" for=
                             "entry_2146594322">article_content</label>
                    </div><label class="ss-q-item-label" for=
                                 "entry_2146594322"></label>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                      <label class="ss-q-item-label" for=
                             "entry_2146594322"></label>
                    </div><input class="ss-q-short" dir="auto" id=
                                 "entry_2146594322" name="entry.2146594322" title=""
                                 type="text" value="">

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>

              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-text" dir="ltr">
                  <div class="ss-form-entry hidden-field">
                    <label class="ss-q-item-label" for=
                           "entry_381671704"></label>

                    <div class="ss-q-title">
                      <label class="ss-q-item-label" for=
                             "entry_381671704">article_annotations</label>
                    </div><label class="ss-q-item-label" for=
                                 "entry_381671704"></label>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                      <label class="ss-q-item-label" for=
                             "entry_381671704"></label>
                    </div><input class="ss-q-short" dir="auto" id=
                                 "entry_381671704" name="entry.381671704" title="" type=
                                 "text" value="">

                    <div class="error-message"></div>
                  </div>
                </div>
              </div>

              <div class="ss-form-question errorbox-good">
                <div class="ss-item ss-text" dir="ltr">
                  <div class="ss-form-entry hidden-field">
                    <label class="ss-q-item-label" for=
                           "entry_1787320211"></label>

                    <div class="ss-q-title">
                      <label class="ss-q-item-label" for=
                             "entry_1787320211">article_headline</label>
                    </div><label class="ss-q-item-label" for=
                                 "entry_1787320211"></label>

                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                      <label class="ss-q-item-label" for=
                             "entry_1787320211"></label>
                    </div><input class="ss-q-short" dir="auto" id=
                                 "entry_1787320211" name="entry.1787320211" title=""
                                 type="text" value="">

                    <div class="error-message"></div>
                  </div>
                </div>
              </div><input name="draftResponse" type="hidden" value="[] ">
              <input name="pageHistory" type="hidden" value="0">

              <div class="ss-item ss-navigate">
                <table id="navigation-table">
                  <tbody>
                    <tr>
                      <td class="ss-form-entry goog-inline-block" dir=
                          "ltr" id="navigation-buttons">
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </form>
          <div id="hintblock" class="toolTip">
            <div id="hintcontent"></div>
            <div id="hintclose">Close</div>
          </div>
        </div><!--   END OF GOOGLE FORM -->
        <div class="next-box">
          <button id="goto-tagging" class="next" type="button"> I've answered the questions. Bring me to the tagging tool. </button>
          <button id="ques-reset" class="reset" type="button"> Reset </button>
        </div>
      </div>
    </div><!--   END OF FORM Page -->
    
    <!-- Start of tag page -->
    <div id="tagpage" class="hidden-field page">
      <div class="prompt">
      <p>Please highlight and tag all the text related to problem, solutions, and results, if any, in the following article. You can tag as much or as little as you think appropriate.</p>
      <p>Just highlight a section of text you want to tag. A tagging menu will appear next to the highlighted text, allowing you to choose or cancel a tag.</p>
      </div>
      <div class="article-box tag-box" id="tagged-article">
        <div class="at-hl"> </div>
        <div class="at-ct" id="tag-content-container">  </div>
      </div>
      <div class="next-box">
        <button id="goto-review" class="next" type="button"> I'm done. </button>
        <button id="tag-reset" class="reset" type="button"> Reset </button>
      </div>
    </div>
    
    <!-- Start of review -->
    <div id="review" class="hidden-field page">
    <p>
      Thank you for participating. If you provide your name and email address, we will enter you in the iPad drawing held on [DATE TBD].  Your name and email address will only be used for the purposes of communicating with you regarding the Seattle Times and the iPad drawing.  Your email address will not be used for other purposes or provided to any other entity for the purpose of solicitation.”
      </p>
      <div id="user-info">
        <div class="ss-form-question errorbox-good"><!-- Start question 1: name -->
                <div class="ss-item ss-item-required ss-text" dir="ltr">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for=
                           "entry_98167410"></label>
                    <div class="ss-q-title">
                      <label class="ss-q-item-label" for=
                             "entry_98167410">What is your name?
                        <label for= "itemView.getDomIdToLabel()"></label>

                      </label>
                    </div>
                    <div class="ss-q-help ss-secondary-text" dir="ltr">
                    </div>
                    <input class="ss-q-short" dir="auto" id=
                                 "entry_98167410" name="entry.98167410" required=""
                                 title="" type="text" value="">
                    <div class="error-message"></div>
                  </div>
                </div>
              </div> <!-- end question 1 -->

              <!-- Start question 2: email -->
              <div class="ss-form-question errorbox-good" role="listitem">
                <div dir="ltr" class="ss-item  ss-text">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for="entry_2135852305">
                      <div class="ss-q-title">What is your email address? (For drawing purpose)
                      </div>
                      <div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
                    <input type="text" name="entry.2135852305" value="" class="ss-q-short" id="entry_2135852305" dir="auto" aria-label="What is your email address? (For drawing purpose)  " title="">
                    <div class="error-message" id="2139953738_errorMessage"></div>
              </div></div></div> <!-- end question 2 -->


              <!-- start question 3: education status -->
              <div class="ss-form-question errorbox-good" role="listitem">
                <div dir="ltr" class="ss-item ss-item-required ss-radio"><div class="ss-form-entry">
                    <label class="ss-q-item-label" for="entry_802414739"><div class="ss-q-title">Please tell us about your interest in education issues. Are you a:</div>
                      <div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

                    <ul class="ss-choices" role="radiogroup" aria-label="Please tell us about your interest in education issues. Are you a:">
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block">
                            <input type="radio" name="entry.1739474268" value="Parent" id="group_1739474268_1" role="radio" class="ss-q-radio" aria-label="Parent" required="" aria-required="true"></span>
                          <span class="ss-choice-label">Parent</span>
                      </label>
                      </li>
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Student" id="group_1739474268_2" role="radio" class="ss-q-radio" aria-label="Student" required="" aria-required="true"></span>
                          <span class="ss-choice-label">Student</span>
                      </label>
                      </li>
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Educator" id="group_1739474268_3" role="radio" class="ss-q-radio" aria-label="Educator" required="" aria-required="true"></span>
                          <span class="ss-choice-label">Educator</span>
                      </label>
                      </li>
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Community Leader" id="group_1739474268_4" role="radio" class="ss-q-radio" aria-label="Community Leader" required="" aria-required="true"></span>
                          <span class="ss-choice-label">Community Leader</span>
                      </label>
                      </li>
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Taxpayer" id="group_1739474268_5" role="radio" class="ss-q-radio" aria-label="Taxpayer" required="" aria-required="true"></span>
                          <span class="ss-choice-label">Taxpayer</span>
                      </label>
                      </li>
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="__other_option__" id="group_1739474268_6" role="radio" class="ss-q-radio ss-q-other-toggle" required="" aria-required="true"></span>
                          <span class="ss-choice-label">Other:</span></label>
                        <span class="ss-q-other-container goog-inline-block"><input type="text" name="entry.1739474268.other_option_response" value="" class="ss-q-other" id="entry_1739474268_other_option_response" dir="auto" aria-label="Other"></span>
                    </li></ul>
              </div></div></div> <!-- end question 3 -->

              <!-- start question 4: help analyze more stories -->
              <div class="ss-form-question errorbox-good" role="listitem">
                <div dir="ltr" class="ss-item  ss-radio">
                  <div class="ss-form-entry">
                    <label class="ss-q-item-label" for="entry_1610175360"><div class="ss-q-title">Are you interested in helping us analyze more stories in the future?
                      </div>
                      <div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
                    <ul class="ss-choices" role="radiogroup" aria-label="Are you interested in helping us analyze more stories in the future?  ">
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block">
                            <input type="radio" name="entry.1398427809" value="Yes" id="group_1398427809_1" role="radio" class="ss-q-radio" aria-label="Yes"></span>
                          <span class="ss-choice-label">Yes</span>
                      </label>
                      </li>
                      <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block">
                            <input type="radio" name="entry.1398427809" value="No" id="group_1398427809_2" role="radio" class="ss-q-radio" aria-label="No"></span>
                          <span class="ss-choice-label">No</span>
                      </label>
                    </ul>
              </div></div></div><!-- end question 4 -->
      </div>
      <div class="next-box">
        <button id="rv-bt" type="button"> Submit my responses and exit. </button>
        <button id="finish" type="button">  Submit my responses and analyze another article </button>
      </div>
    </div>
    </div> <!-- End of container -->
    <!-- Start of highlight bar -->
    <div id="highlightbar" class="hl0" style="opacity: 1; display: none; left: 35.5px; top: 156px;">
      <input id='problem' class="tagbut" name="tag" type="radio" value="problem" data-color="#FFCC00" /> 
      <strong id='problem-tag'>Problem</strong> <br/>
      <input id='solution' class="tagbut" name="tag" type="radio" value="solution" data-color="#00FFCC" /> 
      <strong id='solution-tag'>Solution</strong> <br/>
      <input id='result' class="tagbut" name="tag" type="radio" value="result" data-color="#D532FF" />
      <strong id='result-tag'>Result</strong>  <br/>
      <input id='remove' class="tagbut" name="tag" type="radio" value="remove" data-color="transparent" />
      <strong id=remove-tag'>Remove</strong>  <br/>
    </div>


    
    <!-- Start of Google Form -->
    <div id="ss-form-realgform">
      <form action="https://docs.google.com/forms/d/1A5M4T8TGWyfUPsdrcRjvVYbAJLhPA-VR-02830EqLE0/formResponse" method="POST" id="ss-form" target="_self" onsubmit=""><ol role="list" class="ss-question-list" style="display: none; padding-left: 0">
<div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_66704122"><div class="ss-q-title">What is your name?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<input type="text" name="entry.66704122" value="" class="ss-q-short" id="entry_66704122" dir="auto" aria-label="What is your name?  " title="">
<div class="error-message" id="1547914906_errorMessage"></div>
<div class="required-message">This is a required question</div>
</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_2135852305"><div class="ss-q-title">What is your email address? (For drawing purpose)
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<input type="text" name="entry.2135852305" value="" class="ss-q-short" id="entry_2135852305" dir="auto" aria-label="What is your email address? (For drawing purpose)  " title="">
<div class="error-message" id="2139953738_errorMessage"></div>
<div class="required-message">This is a required question</div>
</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_802414739"><div class="ss-q-title">Please tell us about your interest in education issues. Are you a:
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Please tell us about your interest in education issues. Are you a:  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Parent" id="group_1739474268_1" role="radio" class="ss-q-radio" aria-label="Parent"></span>
<span class="ss-choice-label">Parent</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Student" id="group_1739474268_2" role="radio" class="ss-q-radio" aria-label="Student"></span>
<span class="ss-choice-label">Student</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Educator" id="group_1739474268_3" role="radio" class="ss-q-radio" aria-label="Educator"></span>
<span class="ss-choice-label">Educator</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Community Leader" id="group_1739474268_4" role="radio" class="ss-q-radio" aria-label="Community Leader"></span>
<span class="ss-choice-label">Community Leader</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="Taxpayer" id="group_1739474268_5" role="radio" class="ss-q-radio" aria-label="Taxpayer"></span>
<span class="ss-choice-label">Taxpayer</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1739474268" value="__other_option__" id="group_1739474268_6" role="radio" class="ss-q-radio ss-q-other-toggle"></span>
<span class="ss-choice-label">Other:</span></label>
<span class="ss-q-other-container goog-inline-block"><input type="text" name="entry.1739474268.other_option_response" value="" class="ss-q-other" id="entry_1739474268_other_option_response" dir="auto" aria-label="Other"></span>
</li></ul>
<div class="error-message" id="802414739_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_1610175360"><div class="ss-q-title">Are you interested in helping us analyze more stories in the future?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Are you interested in helping us analyze more stories in the future?  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1398427809" value="Yes" id="group_1398427809_1" role="radio" class="ss-q-radio" aria-label="Yes"></span>
<span class="ss-choice-label">Yes</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1398427809" value="No" id="group_1398427809_2" role="radio" class="ss-q-radio" aria-label="No"></span>
<span class="ss-choice-label">No</span>
</label></li></ul>
<div class="error-message" id="1610175360_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_2064572485"><div class="ss-q-title">Does the story explain the causes of a problem?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Does the story explain the causes of a problem?  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1918432746" value="No" id="group_1918432746_1" role="radio" class="ss-q-radio" aria-label="No"></span>
<span class="ss-choice-label">No</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1918432746" value="Somewhat" id="group_1918432746_2" role="radio" class="ss-q-radio" aria-label="Somewhat"></span>
<span class="ss-choice-label">Somewhat</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1918432746" value="Clearly" id="group_1918432746_3" role="radio" class="ss-q-radio" aria-label="Clearly"></span>
<span class="ss-choice-label">Clearly</span>
</label></li></ul>
<div class="error-message" id="2064572485_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_600925115"><div class="ss-q-title">Does the story present an associated solution to that problem?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Does the story present an associated solution to that problem?  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.477095358" value="No" id="group_477095358_1" role="radio" class="ss-q-radio" aria-label="No"></span>
<span class="ss-choice-label">No</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.477095358" value="Somewhat" id="group_477095358_2" role="radio" class="ss-q-radio" aria-label="Somewhat"></span>
<span class="ss-choice-label">Somewhat</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.477095358" value="Clearly" id="group_477095358_3" role="radio" class="ss-q-radio" aria-label="Clearly"></span>
<span class="ss-choice-label">Clearly</span>
</label></li></ul>
<div class="error-message" id="600925115_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_860146877"><div class="ss-q-title">Does the story address the problem solving and how-to details of implementation?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Does the story address the problem solving and how-to details of implementation?  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1554396570" value="No" id="group_1554396570_1" role="radio" class="ss-q-radio" aria-label="No"></span>
<span class="ss-choice-label">No</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1554396570" value="Somewhat" id="group_1554396570_2" role="radio" class="ss-q-radio" aria-label="Somewhat"></span>
<span class="ss-choice-label">Somewhat</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1554396570" value="Clearly" id="group_1554396570_3" role="radio" class="ss-q-radio" aria-label="Clearly"></span>
<span class="ss-choice-label">Clearly</span>
</label></li></ul>
<div class="error-message" id="860146877_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_597985373"><div class="ss-q-title">Does the story present results, or indications of progress, linked to the solution?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Does the story present results, or indications of progress, linked to the solution?  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1631672294" value="No" id="group_1631672294_1" role="radio" class="ss-q-radio" aria-label="No"></span>
<span class="ss-choice-label">No</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1631672294" value="Somewhat" id="group_1631672294_2" role="radio" class="ss-q-radio" aria-label="Somewhat"></span>
<span class="ss-choice-label">Somewhat</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1631672294" value="Clearly" id="group_1631672294_3" role="radio" class="ss-q-radio" aria-label="Clearly"></span>
<span class="ss-choice-label">Clearly</span>
</label></li></ul>
<div class="error-message" id="597985373_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-radio"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_1183313616"><div class="ss-q-title">Does the story convey an insight or teachable lesson?
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>

<ul class="ss-choices" role="radiogroup" aria-label="Does the story convey an insight or teachable lesson?  "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1970954995" value="No" id="group_1970954995_1" role="radio" class="ss-q-radio" aria-label="No"></span>
<span class="ss-choice-label">No</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1970954995" value="Somewhat" id="group_1970954995_2" role="radio" class="ss-q-radio" aria-label="Somewhat"></span>
<span class="ss-choice-label">Somewhat</span>
</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1970954995" value="Clearly" id="group_1970954995_3" role="radio" class="ss-q-radio" aria-label="Clearly"></span>
<span class="ss-choice-label">Clearly</span>
</label></li></ul>
<div class="error-message" id="1183313616_errorMessage"></div>
<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_354358979"><div class="ss-q-title">URL
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<input type="text" name="entry.354358979" value="" class="ss-q-short" id="entry_354358979" dir="auto" aria-label="URL  " title="">
<div class="error-message" id="561217911_errorMessage"></div>
<div class="required-message">This is a required question</div>
</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-paragraph-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_775723807"><div class="ss-q-title">Content
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<textarea name="entry.775723807" rows="8" cols="0" class="ss-q-long" id="entry_775723807" dir="auto" aria-label="Content  "></textarea>
<div class="error-message" id="699781366_errorMessage"></div>
<div class="required-message">This is a required question</div>
</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-paragraph-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_903406015"><div class="ss-q-title">Annotation
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<textarea name="entry.903406015" rows="8" cols="0" class="ss-q-long" id="entry_903406015" dir="auto" aria-label="Annotation  "></textarea>
<div class="error-message" id="1684828381_errorMessage"></div>
<div class="required-message">This is a required question</div>
</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_1494902380"><div class="ss-q-title">Headline
</div>
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<input type="text" name="entry.1494902380" value="" class="ss-q-short" id="entry_1494902380" dir="auto" aria-label="Headline  " title="">
<div class="error-message" id="1764037493_errorMessage"></div>
<div class="required-message">This is a required question</div>
</div></div></div>
<input type="hidden" name="draftResponse" value="[,,&quot;4996399877183524830&quot;]
">
<input type="hidden" name="pageHistory" value="0">


<input type="hidden" name="fbzx" value="4996399877183524830">

<div class="ss-item ss-navigate"><table id="navigation-table"><tbody><tr><td class="ss-form-entry goog-inline-block" id="navigation-buttons" dir="ltr">
<input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action ">
<div class="ss-password-warning ss-secondary-text">Never submit passwords through Google Forms.</div></td>
</tr></tbody></table></div></ol></form></div>
    <!-- End of Google Form -->

    
  </body>
</html>
