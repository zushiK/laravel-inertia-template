import { isValidNumber, parsePhoneNumber } from "libphonenumber-js";

/**
 * クリックで要素を削除する
 */
document.querySelectorAll(".js-remove-element").forEach(($ele) => {
    $ele.addEventListener("click", () => {
        const $target = document.getElementById($ele.dataset.dismissElement);
        if ($target) $target.remove();
    });
});

/**
 * window confirm
 * メッセージ途中で改行したい場合は「&#13;&#10;」などを使用
 * @type {NodeListOf<Element>}
 */
const $window_confirm = document.querySelectorAll(".js-window_confirm");
if ($window_confirm.length !== 0) {
    $window_confirm.forEach(($ele) => {
        $ele.addEventListener("click", function (e) {
            const message = e.target.dataset.confirmMessage;
            if (!window.confirm(message)) e.preventDefault();
        });
    });
}

// 電話番号パーサー
document.querySelectorAll(".js-tel-parse")?.forEach((item) => {
    item.addEventListener("blur", (e) => {
        // console.log(e.target.value);
        if (!isValidNumber(e.target.value, "JP")) return false;
        e.target.value = parsePhoneNumber(
            e.target.value,
            "JP"
        )?.formatNational();
    });
});

// 郵便番号をパースしつつ、
// js-pref-parseのクラスの要素に都道府県
// 第3引数のクラスの要素に住所をセットする
document.querySelectorAll(".js-zip-parse")?.forEach((item) => {
    item.addEventListener("blur", (e) => {
        e.target.value = addHyphenToPostalCode(e.target.value);
        yubinbangou(e.target.value).then((res) => {
            let dom = document.querySelector(".js-pref-parse");
            if (dom) dom.value = res.data.pref;
            dom = document.querySelector(".js-address1-parse");
            if (dom) dom.value = res.data.city + res.data.town;
        });
    });
});

export default async function yubinbangou(input) {
    const a = input.replace(/[０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 65248)
    );
    const b = a.match(/\d/g);
    const c = b && b.join("");
    const yubin7 = c?.length === 7 ? c : null;
    if (yubin7) {
        const res = await fetch("https://api.zipaddress.net?zipcode=" + yubin7);
        return await res.json();
    } else {
        return {};
    }
}

// 郵便番号にハイフンを追加する
const addHyphenToPostalCode = (code) => {
    if (code.match(/^\d{7}$/)) {
        return code.slice(0, 3) + "-" + code.slice(3, code.length);
    } else {
        return code;
    }
};
