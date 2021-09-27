import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class User extends Vue {
    private isDropdownOpened = false;

    public mounted(): void {
        document.addEventListener('click', this.documentClick);
    }

    public unmounted(): void {
        document.removeEventListener('click', this.documentClick);
    }

    private toggleDropdown() {
        this.isDropdownOpened = !this.isDropdownOpened;
    }

    private documentClick(event: Event) {
        const el: HTMLElement = this.$refs.dropdown as HTMLElement;
        const target: HTMLElement = event.target as HTMLElement;
        if (el !== target && !el.contains(target)) {
            this.isDropdownOpened = false;
        }
    }

    get user(): IUser {
        return this.$store.getters.user;
    }

    private logout() {
        this.$store.dispatch('logout');
    }
}
