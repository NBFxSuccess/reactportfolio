function Contact() {
    return (<section class="spacerbottom card">
<div class="cardtext spacerbottom">
    <div class="spacer"/>
<p id="contactmessage">Please contact me via email @ <a href="mailto:nick@getmighty.net">nick@getmighty.net</a> or fill out the form below (form not hooked up yet)</p>
</div>
<form class="flex justify-center roundme" action="blah" method="post">
    <ul class="spacerbottom">
    <li class="halfspacerbottom"><input class="roundme inputfieldc" placeholder="Name" name="Name" type="text" required></input></li>
    <li><input class="roundme inputfieldc halfspacerbottom" placeholder="Email" name="Email" type="text" required></input></li>
    <li><textarea name="Message" placeholder="Message" required></textarea></li>
    <div class="flex justify-center">
    <li><input class="text formsubmitbut" type="submit" value="Send Message"></input></li>
    </div>
    </ul>
</form>
</section>)
    }
    export default Contact;