import Plugin from 'src/plugin-system/plugin.class';

export default class TestPlugin extends Plugin {

    static options = {
        /**
         * Specifies the text that is prompted to the user
         * @type string
         */
        text: 'babsdfds',
    };


    init() {
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            alert(this.options.text);
        }
    }
}
