const total = 3;
function openTab(oldId, newId) {
    const percent = Math.round(newId / total * 100.0);
    $(`#tab${oldId}`).removeClass('active');
    $(`#tab${newId}`).addClass('active');
    $(`#progress-bar`).css('width', `${percent}%`);
    $(`#progress-bar-text`).text(`${percent}%`);
}