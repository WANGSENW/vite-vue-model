import { getCurrentInstance, ComponentInternalInstance } from "vue";

export function useGlobalConfig() {
    const instace: ComponentInternalInstance | null = getCurrentInstance()
    if (!instace) {
        return
    }
    return instace.appContext.config.globalProperties.$AILEMENTE || {} 
}