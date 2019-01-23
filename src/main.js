import '@babel/polyfill';
import './main.scss';
import $ from 'jquery';
import $h from './UIComponent';

window.$h = $h;
window.$ = $;
window.jQuery = $;

$(function () {
    let $dialog = $('.dialog-modal');
    $dialog.click(function () {
        $(this).removeClass('visible');
    });

    var $ruleModal = $('.rule-modal-wrap'),
        $ruleBox  = $('.rule-modal'),
        $ruleBtn  = $('.rule-wrap');
    $ruleBtn.click(function () {
        $ruleModal.addClass('visible');
    });
    $ruleBox.click(function () {
        return false;   //阻止事件冒泡
    });
});
