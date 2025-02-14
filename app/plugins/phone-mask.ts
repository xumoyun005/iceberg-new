export default defineNuxtPlugin((nuxtApp) => {
  function formatPhoneNumber(value: string): string {
    value = value.replace(/\D/g, "");

    if (value.startsWith("998")) {
      value = value.slice(3);
    }

    let phoneNumber = "+998 ";

    if (value.length > 0) {
      phoneNumber += value.substring(0, 2);
    }
    if (value.length > 2) {
      phoneNumber += " " + value.substring(2, 5);
    }
    if (value.length > 5) {
      phoneNumber += " " + value.substring(5, 7);
    }
    if (value.length > 7) {
      phoneNumber += " " + value.substring(7, 9);
    }

    return phoneNumber;
  }

  function debounce<T extends (...args: any[]) => void>(
    func: T,
    timeout = 300
  ): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  }

  nuxtApp.vueApp.directive("phone-mask", {
    mounted(el: HTMLInputElement) {
      const handleInput = (e: Event) => {
        if (!e.isTrusted || !e.target) return;

        const target = e.target as HTMLInputElement;
        target.value = formatPhoneNumber(target.value);
      };

      el.oninput = debounce(handleInput, 300);

      el.onfocus = () => {
        if (!el.value) {
          el.value = "+998 ";
        }
      };

      el.onkeydown = (e: KeyboardEvent) => {
        if (
          el.selectionStart !== null &&
          el.selectionStart < 5 &&
          (e.key === "Backspace" || e.key === "Delete")
        ) {
          e.preventDefault();
        }
      };
    },
  });
});
