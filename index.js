
<script>
    const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content-item');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // remove active class from all tabs and tab content
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // add active class to current tab and its corresponding tab content
    this.classList.add('active');
    document.getElementById(this.dataset.tabContent).classList.add('active');
    event.currentTargetclassList.add("active-link");

    <meta name='viewport' content='width=device-width, initial-scale=1'>
    src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'>
</script>