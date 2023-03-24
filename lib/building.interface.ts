import { BuildingType } from './building-type.enum'

export interface Building {
  id: string
  scenario_name: string
  locked: string
  description: {[key: string]: string}
  building_type: BuildingType
  heated_floor_area: number
  gross_area: number
  integrated_garage: number
  external_area: number
  gross_area_above_ground: number
  person_count: number
  storeys_above_ground: number
  storeys_below_ground: number
  storey_height:number
  initial_year: number
  calculation_timespan: number
  calculation_mode: 'BR23' | 'Normal' | 'SC'
  outside_area: number
  plot_area: number
  energy_class: 'LowEnergy' | string
}
