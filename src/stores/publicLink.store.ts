import { create } from "zustand"
import { type DriveCloudItem } from "@/components/drive"

export type DirectoryPublicLinkStore = {
	items: DriveCloudItem[]
	searchTerm: string
	virtualURL: string
	passwordState: {
		uuid: string
		password: string
	}
	downloadBtn: boolean
	setItems: (fn: DriveCloudItem[] | ((prev: DriveCloudItem[]) => DriveCloudItem[])) => void
	setSearchTerm: (fn: string | ((prev: string) => string)) => void
	setVirtualURL: (fn: string | ((prev: string) => string)) => void
	setPasswordState: (
		fn:
			| {
					uuid: string
					password: string
			  }
			| ((prev: { uuid: string; password: string }) => {
					uuid: string
					password: string
			  })
	) => void
	setDownloadBtn: (fn: boolean | ((prev: boolean) => boolean)) => void
}

export const useDirectoryPublicLinkStore = create<DirectoryPublicLinkStore>(set => ({
	items: [],
	searchTerm: "",
	virtualURL: "",
	passwordState: {
		uuid: "",
		password: ""
	},
	downloadBtn: false,
	setItems(fn) {
		set(state => ({ items: typeof fn === "function" ? fn(state.items) : fn }))
	},
	setSearchTerm(fn) {
		set(state => ({ searchTerm: typeof fn === "function" ? fn(state.searchTerm) : fn }))
	},
	setVirtualURL(fn) {
		set(state => ({ virtualURL: typeof fn === "function" ? fn(state.virtualURL) : fn }))
	},
	setPasswordState(fn) {
		set(state => ({ passwordState: typeof fn === "function" ? fn(state.passwordState) : fn }))
	},
	setDownloadBtn(fn) {
		set(state => ({ downloadBtn: typeof fn === "function" ? fn(state.downloadBtn) : fn }))
	}
}))

export type PublicLinkStore = {
	passwordState: {
		uuid: string
		password: string
		salt: string
	}
	setPasswordState: (
		fn:
			| {
					uuid: string
					password: string
					salt: string
			  }
			| ((prev: { uuid: string; password: string; salt: string }) => {
					uuid: string
					password: string
					salt: string
			  })
	) => void
}

export const usePublicLinkStore = create<PublicLinkStore>(set => ({
	passwordState: {
		uuid: "",
		password: "",
		salt: ""
	},
	setPasswordState(fn) {
		set(state => ({ passwordState: typeof fn === "function" ? fn(state.passwordState) : fn }))
	}
}))
