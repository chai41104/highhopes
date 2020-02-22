function openTab(oldId, newId) {
    console.log('AAA');
    $(`#tab${oldId}`).removeClass('active');
    $(`#tab${newId}`).addClass('active');
}