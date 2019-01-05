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
});
