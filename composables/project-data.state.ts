interface FileData {
  fileName: string
  data: Object[]
}

export const useProjectData = () => useState<FileData[]>('projectData', () => [])
