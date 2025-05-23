import { type Prettify } from "@/types"
import { type DriveCloudItem } from "@/components/drive"

export type DriveCloudItemWithPath = Prettify<DriveCloudItem & { path: string }>

export type WorkerToMainMessage =
	| {
			type: "download" | "upload"
			data: { uuid: string; name: string; fileType: "file" | "directory" } & (
				| {
						type: "started"
						size: number
				  }
				| {
						type: "queued"
				  }
				| {
						type: "finished"
						size: number
				  }
				| {
						type: "progress"
						bytes: number
				  }
				| {
						type: "directoryProgress"
						created: number
				  }
				| {
						type: "error"
						err: Error
						size: number
				  }
				| {
						type: "stopped"
						size: number
				  }
				| {
						type: "paused"
				  }
				| {
						type: "resumed"
				  }
			)
	  }
	| {
			type: "shareProgress"
			done: number
			total: number
			requestUUID: string
	  }
	| {
			type: "publicLinkProgress"
			done: number
			total: number
			uuid: string
	  }
