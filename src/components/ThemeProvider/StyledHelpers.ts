
import {css} from "styled-components";

export const StyledHelpers = css`

    ${({theme}) => {
        const { breakpoints } = theme; //Pending breakpoints
        return `
        
        .d-none {
            display: none !important;
          }
          
          .d-inline {
            display: inline !important;
          }
          
          .d-inline-block {
            display: inline-block !important;
          }
          
          .d-block {
            display: block !important;
          }
          
          .d-table {
            display: table !important;
          }
          
          .d-table-row {
            display: table-row !important;
          }
          
          .d-table-cell {
            display: table-cell !important;
          }
          
          .d-flex {
            display: -ms-flexbox !important;
            display: flex !important;
          }
          
          .d-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
          }
          
          @media only screen and (min-width: ${breakpoints["screen-sm"]}) {
            .d-sm-none {
              display: none !important;
            }
          
            .d-sm-inline {
              display: inline !important;
            }
          
            .d-sm-inline-block {
              display: inline-block !important;
            }
          
            .d-sm-block {
              display: block !important;
            }
          
            .d-sm-table {
              display: table !important;
            }
          
            .d-sm-table-row {
              display: table-row !important;
            }
          
            .d-sm-table-cell {
              display: table-cell !important;
            }
          
            .d-sm-flex {
              display: -ms-flexbox !important;
              display: flex !important;
            }
          
            .d-sm-inline-flex {
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-md"]}) {
            .d-md-none {
              display: none !important;
            }
          
            .d-md-inline {
              display: inline !important;
            }
          
            .d-md-inline-block {
              display: inline-block !important;
            }
          
            .d-md-block {
              display: block !important;
            }
          
            .d-md-table {
              display: table !important;
            }
          
            .d-md-table-row {
              display: table-row !important;
            }
          
            .d-md-table-cell {
              display: table-cell !important;
            }
          
            .d-md-flex {
              display: -ms-flexbox !important;
              display: flex !important;
            }
          
            .d-md-inline-flex {
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
            .d-lg-none {
              display: none !important;
            }
          
            .d-lg-inline {
              display: inline !important;
            }
          
            .d-lg-inline-block {
              display: inline-block !important;
            }
          
            .d-lg-block {
              display: block !important;
            }
          
            .d-lg-table {
              display: table !important;
            }
          
            .d-lg-table-row {
              display: table-row !important;
            }
          
            .d-lg-table-cell {
              display: table-cell !important;
            }
          
            .d-lg-flex {
              display: -ms-flexbox !important;
              display: flex !important;
            }
          
            .d-lg-inline-flex {
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
            .d-xl-none {
              display: none !important;
            }
          
            .d-xl-inline {
              display: inline !important;
            }
          
            .d-xl-inline-block {
              display: inline-block !important;
            }
          
            .d-xl-block {
              display: block !important;
            }
          
            .d-xl-table {
              display: table !important;
            }
          
            .d-xl-table-row {
              display: table-row !important;
            }
          
            .d-xl-table-cell {
              display: table-cell !important;
            }
          
            .d-xl-flex {
              display: -ms-flexbox !important;
              display: flex !important;
            }
          
            .d-xl-inline-flex {
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
          
          @media print {
            .d-print-none {
              display: none !important;
            }
          
            .d-print-inline {
              display: inline !important;
            }
          
            .d-print-inline-block {
              display: inline-block !important;
            }
          
            .d-print-block {
              display: block !important;
            }
          
            .d-print-table {
              display: table !important;
            }
          
            .d-print-table-row {
              display: table-row !important;
            }
          
            .d-print-table-cell {
              display: table-cell !important;
            }
          
            .d-print-flex {
              display: -ms-flexbox !important;
              display: flex !important;
            }
          
            .d-print-inline-flex {
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
          
          .flex-row {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
          }
          
          .flex-column {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
          }
          
          .flex-row-reverse {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
          }
          
          .flex-column-reverse {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
          }
          
          .flex-wrap {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
          }
          
          .flex-nowrap {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
          }
          
          .flex-wrap-reverse {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
          }
          
          .flex-fill {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
          }
          
          .flex-grow-0 {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
          }
          
          .flex-grow-1 {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
          }
          
          .flex-shrink-0 {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
          }
          
          .flex-shrink-1 {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
          }
          
          .justify-content-start {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
          }
          
          .justify-content-end {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
          }
          
          .justify-content-center {
            -ms-flex-pack: center !important;
            justify-content: center !important;
          }
          
          .justify-content-between {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
          }
          
          .justify-content-around {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
          }
          
          .align-items-start {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
          }
          
          .align-items-end {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
          }
          
          .align-items-center {
            -ms-flex-align: center !important;
            align-items: center !important;
          }
          
          .align-items-baseline {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
          }
          
          .align-items-stretch {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
          }
          
          .align-content-start {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
          }
          
          .align-content-end {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
          }
          
          .align-content-center {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
          }
          
          .align-content-between {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
          }
          
          .align-content-around {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
          }
          
          .align-content-stretch {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
          }
          
          .align-self-auto {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
          }
          
          .align-self-start {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
          }
          
          .align-self-end {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
          }
          
          .align-self-center {
            -ms-flex-item-align: center !important;
            align-self: center !important;
          }
          
          .align-self-baseline {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
          }
          
          .align-self-stretch {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
          }
          
          @media only screen and (min-width: ${breakpoints["screen-sm"]}) {
            .flex-sm-row {
              -ms-flex-direction: row !important;
              flex-direction: row !important;
            }
          
            .flex-sm-column {
              -ms-flex-direction: column !important;
              flex-direction: column !important;
            }
          
            .flex-sm-row-reverse {
              -ms-flex-direction: row-reverse !important;
              flex-direction: row-reverse !important;
            }
          
            .flex-sm-column-reverse {
              -ms-flex-direction: column-reverse !important;
              flex-direction: column-reverse !important;
            }
          
            .flex-sm-wrap {
              -ms-flex-wrap: wrap !important;
              flex-wrap: wrap !important;
            }
          
            .flex-sm-nowrap {
              -ms-flex-wrap: nowrap !important;
              flex-wrap: nowrap !important;
            }
          
            .flex-sm-wrap-reverse {
              -ms-flex-wrap: wrap-reverse !important;
              flex-wrap: wrap-reverse !important;
            }
          
            .flex-sm-fill {
              -ms-flex: 1 1 auto !important;
              flex: 1 1 auto !important;
            }
          
            .flex-sm-grow-0 {
              -ms-flex-positive: 0 !important;
              flex-grow: 0 !important;
            }
          
            .flex-sm-grow-1 {
              -ms-flex-positive: 1 !important;
              flex-grow: 1 !important;
            }
          
            .flex-sm-shrink-0 {
              -ms-flex-negative: 0 !important;
              flex-shrink: 0 !important;
            }
          
            .flex-sm-shrink-1 {
              -ms-flex-negative: 1 !important;
              flex-shrink: 1 !important;
            }
          
            .justify-content-sm-start {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
            }
          
            .justify-content-sm-end {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
            }
          
            .justify-content-sm-center {
              -ms-flex-pack: center !important;
              justify-content: center !important;
            }
          
            .justify-content-sm-between {
              -ms-flex-pack: justify !important;
              justify-content: space-between !important;
            }
          
            .justify-content-sm-around {
              -ms-flex-pack: distribute !important;
              justify-content: space-around !important;
            }
          
            .align-items-sm-start {
              -ms-flex-align: start !important;
              align-items: flex-start !important;
            }
          
            .align-items-sm-end {
              -ms-flex-align: end !important;
              align-items: flex-end !important;
            }
          
            .align-items-sm-center {
              -ms-flex-align: center !important;
              align-items: center !important;
            }
          
            .align-items-sm-baseline {
              -ms-flex-align: baseline !important;
              align-items: baseline !important;
            }
          
            .align-items-sm-stretch {
              -ms-flex-align: stretch !important;
              align-items: stretch !important;
            }
          
            .align-content-sm-start {
              -ms-flex-line-pack: start !important;
              align-content: flex-start !important;
            }
          
            .align-content-sm-end {
              -ms-flex-line-pack: end !important;
              align-content: flex-end !important;
            }
          
            .align-content-sm-center {
              -ms-flex-line-pack: center !important;
              align-content: center !important;
            }
          
            .align-content-sm-between {
              -ms-flex-line-pack: justify !important;
              align-content: space-between !important;
            }
          
            .align-content-sm-around {
              -ms-flex-line-pack: distribute !important;
              align-content: space-around !important;
            }
          
            .align-content-sm-stretch {
              -ms-flex-line-pack: stretch !important;
              align-content: stretch !important;
            }
          
            .align-self-sm-auto {
              -ms-flex-item-align: auto !important;
              align-self: auto !important;
            }
          
            .align-self-sm-start {
              -ms-flex-item-align: start !important;
              align-self: flex-start !important;
            }
          
            .align-self-sm-end {
              -ms-flex-item-align: end !important;
              align-self: flex-end !important;
            }
          
            .align-self-sm-center {
              -ms-flex-item-align: center !important;
              align-self: center !important;
            }
          
            .align-self-sm-baseline {
              -ms-flex-item-align: baseline !important;
              align-self: baseline !important;
            }
          
            .align-self-sm-stretch {
              -ms-flex-item-align: stretch !important;
              align-self: stretch !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-md"]}) {
            .flex-md-row {
              -ms-flex-direction: row !important;
              flex-direction: row !important;
            }
          
            .flex-md-column {
              -ms-flex-direction: column !important;
              flex-direction: column !important;
            }
          
            .flex-md-row-reverse {
              -ms-flex-direction: row-reverse !important;
              flex-direction: row-reverse !important;
            }
          
            .flex-md-column-reverse {
              -ms-flex-direction: column-reverse !important;
              flex-direction: column-reverse !important;
            }
          
            .flex-md-wrap {
              -ms-flex-wrap: wrap !important;
              flex-wrap: wrap !important;
            }
          
            .flex-md-nowrap {
              -ms-flex-wrap: nowrap !important;
              flex-wrap: nowrap !important;
            }
          
            .flex-md-wrap-reverse {
              -ms-flex-wrap: wrap-reverse !important;
              flex-wrap: wrap-reverse !important;
            }
          
            .flex-md-fill {
              -ms-flex: 1 1 auto !important;
              flex: 1 1 auto !important;
            }
          
            .flex-md-grow-0 {
              -ms-flex-positive: 0 !important;
              flex-grow: 0 !important;
            }
          
            .flex-md-grow-1 {
              -ms-flex-positive: 1 !important;
              flex-grow: 1 !important;
            }
          
            .flex-md-shrink-0 {
              -ms-flex-negative: 0 !important;
              flex-shrink: 0 !important;
            }
          
            .flex-md-shrink-1 {
              -ms-flex-negative: 1 !important;
              flex-shrink: 1 !important;
            }
          
            .justify-content-md-start {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
            }
          
            .justify-content-md-end {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
            }
          
            .justify-content-md-center {
              -ms-flex-pack: center !important;
              justify-content: center !important;
            }
          
            .justify-content-md-between {
              -ms-flex-pack: justify !important;
              justify-content: space-between !important;
            }
          
            .justify-content-md-around {
              -ms-flex-pack: distribute !important;
              justify-content: space-around !important;
            }
          
            .align-items-md-start {
              -ms-flex-align: start !important;
              align-items: flex-start !important;
            }
          
            .align-items-md-end {
              -ms-flex-align: end !important;
              align-items: flex-end !important;
            }
          
            .align-items-md-center {
              -ms-flex-align: center !important;
              align-items: center !important;
            }
          
            .align-items-md-baseline {
              -ms-flex-align: baseline !important;
              align-items: baseline !important;
            }
          
            .align-items-md-stretch {
              -ms-flex-align: stretch !important;
              align-items: stretch !important;
            }
          
            .align-content-md-start {
              -ms-flex-line-pack: start !important;
              align-content: flex-start !important;
            }
          
            .align-content-md-end {
              -ms-flex-line-pack: end !important;
              align-content: flex-end !important;
            }
          
            .align-content-md-center {
              -ms-flex-line-pack: center !important;
              align-content: center !important;
            }
          
            .align-content-md-between {
              -ms-flex-line-pack: justify !important;
              align-content: space-between !important;
            }
          
            .align-content-md-around {
              -ms-flex-line-pack: distribute !important;
              align-content: space-around !important;
            }
          
            .align-content-md-stretch {
              -ms-flex-line-pack: stretch !important;
              align-content: stretch !important;
            }
          
            .align-self-md-auto {
              -ms-flex-item-align: auto !important;
              align-self: auto !important;
            }
          
            .align-self-md-start {
              -ms-flex-item-align: start !important;
              align-self: flex-start !important;
            }
          
            .align-self-md-end {
              -ms-flex-item-align: end !important;
              align-self: flex-end !important;
            }
          
            .align-self-md-center {
              -ms-flex-item-align: center !important;
              align-self: center !important;
            }
          
            .align-self-md-baseline {
              -ms-flex-item-align: baseline !important;
              align-self: baseline !important;
            }
          
            .align-self-md-stretch {
              -ms-flex-item-align: stretch !important;
              align-self: stretch !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
            .flex-lg-row {
              -ms-flex-direction: row !important;
              flex-direction: row !important;
            }
          
            .flex-lg-column {
              -ms-flex-direction: column !important;
              flex-direction: column !important;
            }
          
            .flex-lg-row-reverse {
              -ms-flex-direction: row-reverse !important;
              flex-direction: row-reverse !important;
            }
          
            .flex-lg-column-reverse {
              -ms-flex-direction: column-reverse !important;
              flex-direction: column-reverse !important;
            }
          
            .flex-lg-wrap {
              -ms-flex-wrap: wrap !important;
              flex-wrap: wrap !important;
            }
          
            .flex-lg-nowrap {
              -ms-flex-wrap: nowrap !important;
              flex-wrap: nowrap !important;
            }
          
            .flex-lg-wrap-reverse {
              -ms-flex-wrap: wrap-reverse !important;
              flex-wrap: wrap-reverse !important;
            }
          
            .flex-lg-fill {
              -ms-flex: 1 1 auto !important;
              flex: 1 1 auto !important;
            }
          
            .flex-lg-grow-0 {
              -ms-flex-positive: 0 !important;
              flex-grow: 0 !important;
            }
          
            .flex-lg-grow-1 {
              -ms-flex-positive: 1 !important;
              flex-grow: 1 !important;
            }
          
            .flex-lg-shrink-0 {
              -ms-flex-negative: 0 !important;
              flex-shrink: 0 !important;
            }
          
            .flex-lg-shrink-1 {
              -ms-flex-negative: 1 !important;
              flex-shrink: 1 !important;
            }
          
            .justify-content-lg-start {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
            }
          
            .justify-content-lg-end {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
            }
          
            .justify-content-lg-center {
              -ms-flex-pack: center !important;
              justify-content: center !important;
            }
          
            .justify-content-lg-between {
              -ms-flex-pack: justify !important;
              justify-content: space-between !important;
            }
          
            .justify-content-lg-around {
              -ms-flex-pack: distribute !important;
              justify-content: space-around !important;
            }
          
            .align-items-lg-start {
              -ms-flex-align: start !important;
              align-items: flex-start !important;
            }
          
            .align-items-lg-end {
              -ms-flex-align: end !important;
              align-items: flex-end !important;
            }
          
            .align-items-lg-center {
              -ms-flex-align: center !important;
              align-items: center !important;
            }
          
            .align-items-lg-baseline {
              -ms-flex-align: baseline !important;
              align-items: baseline !important;
            }
          
            .align-items-lg-stretch {
              -ms-flex-align: stretch !important;
              align-items: stretch !important;
            }
          
            .align-content-lg-start {
              -ms-flex-line-pack: start !important;
              align-content: flex-start !important;
            }
          
            .align-content-lg-end {
              -ms-flex-line-pack: end !important;
              align-content: flex-end !important;
            }
          
            .align-content-lg-center {
              -ms-flex-line-pack: center !important;
              align-content: center !important;
            }
          
            .align-content-lg-between {
              -ms-flex-line-pack: justify !important;
              align-content: space-between !important;
            }
          
            .align-content-lg-around {
              -ms-flex-line-pack: distribute !important;
              align-content: space-around !important;
            }
          
            .align-content-lg-stretch {
              -ms-flex-line-pack: stretch !important;
              align-content: stretch !important;
            }
          
            .align-self-lg-auto {
              -ms-flex-item-align: auto !important;
              align-self: auto !important;
            }
          
            .align-self-lg-start {
              -ms-flex-item-align: start !important;
              align-self: flex-start !important;
            }
          
            .align-self-lg-end {
              -ms-flex-item-align: end !important;
              align-self: flex-end !important;
            }
          
            .align-self-lg-center {
              -ms-flex-item-align: center !important;
              align-self: center !important;
            }
          
            .align-self-lg-baseline {
              -ms-flex-item-align: baseline !important;
              align-self: baseline !important;
            }
          
            .align-self-lg-stretch {
              -ms-flex-item-align: stretch !important;
              align-self: stretch !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
            .flex-xl-row {
              -ms-flex-direction: row !important;
              flex-direction: row !important;
            }
          
            .flex-xl-column {
              -ms-flex-direction: column !important;
              flex-direction: column !important;
            }
          
            .flex-xl-row-reverse {
              -ms-flex-direction: row-reverse !important;
              flex-direction: row-reverse !important;
            }
          
            .flex-xl-column-reverse {
              -ms-flex-direction: column-reverse !important;
              flex-direction: column-reverse !important;
            }
          
            .flex-xl-wrap {
              -ms-flex-wrap: wrap !important;
              flex-wrap: wrap !important;
            }
          
            .flex-xl-nowrap {
              -ms-flex-wrap: nowrap !important;
              flex-wrap: nowrap !important;
            }
          
            .flex-xl-wrap-reverse {
              -ms-flex-wrap: wrap-reverse !important;
              flex-wrap: wrap-reverse !important;
            }
          
            .flex-xl-fill {
              -ms-flex: 1 1 auto !important;
              flex: 1 1 auto !important;
            }
          
            .flex-xl-grow-0 {
              -ms-flex-positive: 0 !important;
              flex-grow: 0 !important;
            }
          
            .flex-xl-grow-1 {
              -ms-flex-positive: 1 !important;
              flex-grow: 1 !important;
            }
          
            .flex-xl-shrink-0 {
              -ms-flex-negative: 0 !important;
              flex-shrink: 0 !important;
            }
          
            .flex-xl-shrink-1 {
              -ms-flex-negative: 1 !important;
              flex-shrink: 1 !important;
            }
          
            .justify-content-xl-start {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
            }
          
            .justify-content-xl-end {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
            }
          
            .justify-content-xl-center {
              -ms-flex-pack: center !important;
              justify-content: center !important;
            }
          
            .justify-content-xl-between {
              -ms-flex-pack: justify !important;
              justify-content: space-between !important;
            }
          
            .justify-content-xl-around {
              -ms-flex-pack: distribute !important;
              justify-content: space-around !important;
            }
          
            .align-items-xl-start {
              -ms-flex-align: start !important;
              align-items: flex-start !important;
            }
          
            .align-items-xl-end {
              -ms-flex-align: end !important;
              align-items: flex-end !important;
            }
          
            .align-items-xl-center {
              -ms-flex-align: center !important;
              align-items: center !important;
            }
          
            .align-items-xl-baseline {
              -ms-flex-align: baseline !important;
              align-items: baseline !important;
            }
          
            .align-items-xl-stretch {
              -ms-flex-align: stretch !important;
              align-items: stretch !important;
            }
          
            .align-content-xl-start {
              -ms-flex-line-pack: start !important;
              align-content: flex-start !important;
            }
          
            .align-content-xl-end {
              -ms-flex-line-pack: end !important;
              align-content: flex-end !important;
            }
          
            .align-content-xl-center {
              -ms-flex-line-pack: center !important;
              align-content: center !important;
            }
          
            .align-content-xl-between {
              -ms-flex-line-pack: justify !important;
              align-content: space-between !important;
            }
          
            .align-content-xl-around {
              -ms-flex-line-pack: distribute !important;
              align-content: space-around !important;
            }
          
            .align-content-xl-stretch {
              -ms-flex-line-pack: stretch !important;
              align-content: stretch !important;
            }
          
            .align-self-xl-auto {
              -ms-flex-item-align: auto !important;
              align-self: auto !important;
            }
          
            .align-self-xl-start {
              -ms-flex-item-align: start !important;
              align-self: flex-start !important;
            }
          
            .align-self-xl-end {
              -ms-flex-item-align: end !important;
              align-self: flex-end !important;
            }
          
            .align-self-xl-center {
              -ms-flex-item-align: center !important;
              align-self: center !important;
            }
          
            .align-self-xl-baseline {
              -ms-flex-item-align: baseline !important;
              align-self: baseline !important;
            }
          
            .align-self-xl-stretch {
              -ms-flex-item-align: stretch !important;
              align-self: stretch !important;
            }
          }
          
          .m-0 {
            margin: 0 !important;
          }
          
          .mt-0,
          .my-0 {
            margin-top: 0 !important;
          }
          
          .mr-0,
          .mx-0 {
            margin-right: 0 !important;
          }
          
          .mb-0,
          .my-0 {
            margin-bottom: 0 !important;
          }
          
          .ml-0,
          .mx-0 {
            margin-left: 0 !important;
          }
          
          .m-1 {
            margin: 0.25rem !important;
          }
          
          .mt-1,
          .my-1 {
            margin-top: 0.25rem !important;
          }
          
          .mr-1,
          .mx-1 {
            margin-right: 0.25rem !important;
          }
          
          .mb-1,
          .my-1 {
            margin-bottom: 0.25rem !important;
          }
          
          .ml-1,
          .mx-1 {
            margin-left: 0.25rem !important;
          }
          
          .m-2 {
            margin: 0.5rem !important;
          }
          
          .mt-2,
          .my-2 {
            margin-top: 0.5rem !important;
          }
          
          .mr-2,
          .mx-2 {
            margin-right: 0.5rem !important;
          }
          
          .mb-2,
          .my-2 {
            margin-bottom: 0.5rem !important;
          }
          
          .ml-2,
          .mx-2 {
            margin-left: 0.5rem !important;
          }
          
          .m-3 {
            margin: 1rem !important;
          }
          
          .mt-3,
          .my-3 {
            margin-top: 1rem !important;
          }
          
          .mr-3,
          .mx-3 {
            margin-right: 1rem !important;
          }
          
          .mb-3,
          .my-3 {
            margin-bottom: 1rem !important;
          }
          
          .ml-3,
          .mx-3 {
            margin-left: 1rem !important;
          }
          
          .m-4 {
            margin: 1.5rem !important;
          }
          
          .mt-4,
          .my-4 {
            margin-top: 1.5rem !important;
          }
          
          .mr-4,
          .mx-4 {
            margin-right: 1.5rem !important;
          }
          
          .mb-4,
          .my-4 {
            margin-bottom: 1.5rem !important;
          }
          
          .ml-4,
          .mx-4 {
            margin-left: 1.5rem !important;
          }
          
          .m-5 {
            margin: 3rem !important;
          }
          
          .mt-5,
          .my-5 {
            margin-top: 3rem !important;
          }
          
          .mr-5,
          .mx-5 {
            margin-right: 3rem !important;
          }
          
          .mb-5,
          .my-5 {
            margin-bottom: 3rem !important;
          }
          
          .ml-5,
          .mx-5 {
            margin-left: 3rem !important;
          }
          
          .p-0 {
            padding: 0 !important;
          }
          
          .pt-0,
          .py-0 {
            padding-top: 0 !important;
          }
          
          .pr-0,
          .px-0 {
            padding-right: 0 !important;
          }
          
          .pb-0,
          .py-0 {
            padding-bottom: 0 !important;
          }
          
          .pl-0,
          .px-0 {
            padding-left: 0 !important;
          }
          
          .p-1 {
            padding: 0.25rem !important;
          }
          
          .pt-1,
          .py-1 {
            padding-top: 0.25rem !important;
          }
          
          .pr-1,
          .px-1 {
            padding-right: 0.25rem !important;
          }
          
          .pb-1,
          .py-1 {
            padding-bottom: 0.25rem !important;
          }
          
          .pl-1,
          .px-1 {
            padding-left: 0.25rem !important;
          }
          
          .p-2 {
            padding: 0.5rem !important;
          }
          
          .pt-2,
          .py-2 {
            padding-top: 0.5rem !important;
          }
          
          .pr-2,
          .px-2 {
            padding-right: 0.5rem !important;
          }
          
          .pb-2,
          .py-2 {
            padding-bottom: 0.5rem !important;
          }
          
          .pl-2,
          .px-2 {
            padding-left: 0.5rem !important;
          }
          
          .p-3 {
            padding: 1rem !important;
          }
          
          .pt-3,
          .py-3 {
            padding-top: 1rem !important;
          }
          
          .pr-3,
          .px-3 {
            padding-right: 1rem !important;
          }
          
          .pb-3,
          .py-3 {
            padding-bottom: 1rem !important;
          }
          
          .pl-3,
          .px-3 {
            padding-left: 1rem !important;
          }
          
          .p-4 {
            padding: 1.5rem !important;
          }
          
          .pt-4,
          .py-4 {
            padding-top: 1.5rem !important;
          }
          
          .pr-4,
          .px-4 {
            padding-right: 1.5rem !important;
          }
          
          .pb-4,
          .py-4 {
            padding-bottom: 1.5rem !important;
          }
          
          .pl-4,
          .px-4 {
            padding-left: 1.5rem !important;
          }
          
          .p-5 {
            padding: 3rem !important;
          }
          
          .pt-5,
          .py-5 {
            padding-top: 3rem !important;
          }
          
          .pr-5,
          .px-5 {
            padding-right: 3rem !important;
          }
          
          .pb-5,
          .py-5 {
            padding-bottom: 3rem !important;
          }
          
          .pl-5,
          .px-5 {
            padding-left: 3rem !important;
          }
          
          .m-n1 {
            margin: -0.25rem !important;
          }
          
          .mt-n1,
          .my-n1 {
            margin-top: -0.25rem !important;
          }
          
          .mr-n1,
          .mx-n1 {
            margin-right: -0.25rem !important;
          }
          
          .mb-n1,
          .my-n1 {
            margin-bottom: -0.25rem !important;
          }
          
          .ml-n1,
          .mx-n1 {
            margin-left: -0.25rem !important;
          }
          
          .m-n2 {
            margin: -0.5rem !important;
          }
          
          .mt-n2,
          .my-n2 {
            margin-top: -0.5rem !important;
          }
          
          .mr-n2,
          .mx-n2 {
            margin-right: -0.5rem !important;
          }
          
          .mb-n2,
          .my-n2 {
            margin-bottom: -0.5rem !important;
          }
          
          .ml-n2,
          .mx-n2 {
            margin-left: -0.5rem !important;
          }
          
          .m-n3 {
            margin: -1rem !important;
          }
          
          .mt-n3,
          .my-n3 {
            margin-top: -1rem !important;
          }
          
          .mr-n3,
          .mx-n3 {
            margin-right: -1rem !important;
          }
          
          .mb-n3,
          .my-n3 {
            margin-bottom: -1rem !important;
          }
          
          .ml-n3,
          .mx-n3 {
            margin-left: -1rem !important;
          }
          
          .m-n4 {
            margin: -1.5rem !important;
          }
          
          .mt-n4,
          .my-n4 {
            margin-top: -1.5rem !important;
          }
          
          .mr-n4,
          .mx-n4 {
            margin-right: -1.5rem !important;
          }
          
          .mb-n4,
          .my-n4 {
            margin-bottom: -1.5rem !important;
          }
          
          .ml-n4,
          .mx-n4 {
            margin-left: -1.5rem !important;
          }
          
          .m-n5 {
            margin: -3rem !important;
          }
          
          .mt-n5,
          .my-n5 {
            margin-top: -3rem !important;
          }
          
          .mr-n5,
          .mx-n5 {
            margin-right: -3rem !important;
          }
          
          .mb-n5,
          .my-n5 {
            margin-bottom: -3rem !important;
          }
          
          .ml-n5,
          .mx-n5 {
            margin-left: -3rem !important;
          }
          
          .m-auto {
            margin: auto !important;
          }
          
          .mt-auto,
          .my-auto {
            margin-top: auto !important;
          }
          
          .mr-auto,
          .mx-auto {
            margin-right: auto !important;
          }
          
          .mb-auto,
          .my-auto {
            margin-bottom: auto !important;
          }
          
          .ml-auto,
          .mx-auto {
            margin-left: auto !important;
          }
          
          @media only screen and (min-width: ${breakpoints["screen-sm"]}) {
            .m-sm-0 {
              margin: 0 !important;
            }
          
            .mt-sm-0,
            .my-sm-0 {
              margin-top: 0 !important;
            }
          
            .mr-sm-0,
            .mx-sm-0 {
              margin-right: 0 !important;
            }
          
            .mb-sm-0,
            .my-sm-0 {
              margin-bottom: 0 !important;
            }
          
            .ml-sm-0,
            .mx-sm-0 {
              margin-left: 0 !important;
            }
          
            .m-sm-1 {
              margin: 0.25rem !important;
            }
          
            .mt-sm-1,
            .my-sm-1 {
              margin-top: 0.25rem !important;
            }
          
            .mr-sm-1,
            .mx-sm-1 {
              margin-right: 0.25rem !important;
            }
          
            .mb-sm-1,
            .my-sm-1 {
              margin-bottom: 0.25rem !important;
            }
          
            .ml-sm-1,
            .mx-sm-1 {
              margin-left: 0.25rem !important;
            }
          
            .m-sm-2 {
              margin: 0.5rem !important;
            }
          
            .mt-sm-2,
            .my-sm-2 {
              margin-top: 0.5rem !important;
            }
          
            .mr-sm-2,
            .mx-sm-2 {
              margin-right: 0.5rem !important;
            }
          
            .mb-sm-2,
            .my-sm-2 {
              margin-bottom: 0.5rem !important;
            }
          
            .ml-sm-2,
            .mx-sm-2 {
              margin-left: 0.5rem !important;
            }
          
            .m-sm-3 {
              margin: 1rem !important;
            }
          
            .mt-sm-3,
            .my-sm-3 {
              margin-top: 1rem !important;
            }
          
            .mr-sm-3,
            .mx-sm-3 {
              margin-right: 1rem !important;
            }
          
            .mb-sm-3,
            .my-sm-3 {
              margin-bottom: 1rem !important;
            }
          
            .ml-sm-3,
            .mx-sm-3 {
              margin-left: 1rem !important;
            }
          
            .m-sm-4 {
              margin: 1.5rem !important;
            }
          
            .mt-sm-4,
            .my-sm-4 {
              margin-top: 1.5rem !important;
            }
          
            .mr-sm-4,
            .mx-sm-4 {
              margin-right: 1.5rem !important;
            }
          
            .mb-sm-4,
            .my-sm-4 {
              margin-bottom: 1.5rem !important;
            }
          
            .ml-sm-4,
            .mx-sm-4 {
              margin-left: 1.5rem !important;
            }
          
            .m-sm-5 {
              margin: 3rem !important;
            }
          
            .mt-sm-5,
            .my-sm-5 {
              margin-top: 3rem !important;
            }
          
            .mr-sm-5,
            .mx-sm-5 {
              margin-right: 3rem !important;
            }
          
            .mb-sm-5,
            .my-sm-5 {
              margin-bottom: 3rem !important;
            }
          
            .ml-sm-5,
            .mx-sm-5 {
              margin-left: 3rem !important;
            }
          
            .p-sm-0 {
              padding: 0 !important;
            }
          
            .pt-sm-0,
            .py-sm-0 {
              padding-top: 0 !important;
            }
          
            .pr-sm-0,
            .px-sm-0 {
              padding-right: 0 !important;
            }
          
            .pb-sm-0,
            .py-sm-0 {
              padding-bottom: 0 !important;
            }
          
            .pl-sm-0,
            .px-sm-0 {
              padding-left: 0 !important;
            }
          
            .p-sm-1 {
              padding: 0.25rem !important;
            }
          
            .pt-sm-1,
            .py-sm-1 {
              padding-top: 0.25rem !important;
            }
          
            .pr-sm-1,
            .px-sm-1 {
              padding-right: 0.25rem !important;
            }
          
            .pb-sm-1,
            .py-sm-1 {
              padding-bottom: 0.25rem !important;
            }
          
            .pl-sm-1,
            .px-sm-1 {
              padding-left: 0.25rem !important;
            }
          
            .p-sm-2 {
              padding: 0.5rem !important;
            }
          
            .pt-sm-2,
            .py-sm-2 {
              padding-top: 0.5rem !important;
            }
          
            .pr-sm-2,
            .px-sm-2 {
              padding-right: 0.5rem !important;
            }
          
            .pb-sm-2,
            .py-sm-2 {
              padding-bottom: 0.5rem !important;
            }
          
            .pl-sm-2,
            .px-sm-2 {
              padding-left: 0.5rem !important;
            }
          
            .p-sm-3 {
              padding: 1rem !important;
            }
          
            .pt-sm-3,
            .py-sm-3 {
              padding-top: 1rem !important;
            }
          
            .pr-sm-3,
            .px-sm-3 {
              padding-right: 1rem !important;
            }
          
            .pb-sm-3,
            .py-sm-3 {
              padding-bottom: 1rem !important;
            }
          
            .pl-sm-3,
            .px-sm-3 {
              padding-left: 1rem !important;
            }
          
            .p-sm-4 {
              padding: 1.5rem !important;
            }
          
            .pt-sm-4,
            .py-sm-4 {
              padding-top: 1.5rem !important;
            }
          
            .pr-sm-4,
            .px-sm-4 {
              padding-right: 1.5rem !important;
            }
          
            .pb-sm-4,
            .py-sm-4 {
              padding-bottom: 1.5rem !important;
            }
          
            .pl-sm-4,
            .px-sm-4 {
              padding-left: 1.5rem !important;
            }
          
            .p-sm-5 {
              padding: 3rem !important;
            }
          
            .pt-sm-5,
            .py-sm-5 {
              padding-top: 3rem !important;
            }
          
            .pr-sm-5,
            .px-sm-5 {
              padding-right: 3rem !important;
            }
          
            .pb-sm-5,
            .py-sm-5 {
              padding-bottom: 3rem !important;
            }
          
            .pl-sm-5,
            .px-sm-5 {
              padding-left: 3rem !important;
            }
          
            .m-sm-n1 {
              margin: -0.25rem !important;
            }
          
            .mt-sm-n1,
            .my-sm-n1 {
              margin-top: -0.25rem !important;
            }
          
            .mr-sm-n1,
            .mx-sm-n1 {
              margin-right: -0.25rem !important;
            }
          
            .mb-sm-n1,
            .my-sm-n1 {
              margin-bottom: -0.25rem !important;
            }
          
            .ml-sm-n1,
            .mx-sm-n1 {
              margin-left: -0.25rem !important;
            }
          
            .m-sm-n2 {
              margin: -0.5rem !important;
            }
          
            .mt-sm-n2,
            .my-sm-n2 {
              margin-top: -0.5rem !important;
            }
          
            .mr-sm-n2,
            .mx-sm-n2 {
              margin-right: -0.5rem !important;
            }
          
            .mb-sm-n2,
            .my-sm-n2 {
              margin-bottom: -0.5rem !important;
            }
          
            .ml-sm-n2,
            .mx-sm-n2 {
              margin-left: -0.5rem !important;
            }
          
            .m-sm-n3 {
              margin: -1rem !important;
            }
          
            .mt-sm-n3,
            .my-sm-n3 {
              margin-top: -1rem !important;
            }
          
            .mr-sm-n3,
            .mx-sm-n3 {
              margin-right: -1rem !important;
            }
          
            .mb-sm-n3,
            .my-sm-n3 {
              margin-bottom: -1rem !important;
            }
          
            .ml-sm-n3,
            .mx-sm-n3 {
              margin-left: -1rem !important;
            }
          
            .m-sm-n4 {
              margin: -1.5rem !important;
            }
          
            .mt-sm-n4,
            .my-sm-n4 {
              margin-top: -1.5rem !important;
            }
          
            .mr-sm-n4,
            .mx-sm-n4 {
              margin-right: -1.5rem !important;
            }
          
            .mb-sm-n4,
            .my-sm-n4 {
              margin-bottom: -1.5rem !important;
            }
          
            .ml-sm-n4,
            .mx-sm-n4 {
              margin-left: -1.5rem !important;
            }
          
            .m-sm-n5 {
              margin: -3rem !important;
            }
          
            .mt-sm-n5,
            .my-sm-n5 {
              margin-top: -3rem !important;
            }
          
            .mr-sm-n5,
            .mx-sm-n5 {
              margin-right: -3rem !important;
            }
          
            .mb-sm-n5,
            .my-sm-n5 {
              margin-bottom: -3rem !important;
            }
          
            .ml-sm-n5,
            .mx-sm-n5 {
              margin-left: -3rem !important;
            }
          
            .m-sm-auto {
              margin: auto !important;
            }
          
            .mt-sm-auto,
            .my-sm-auto {
              margin-top: auto !important;
            }
          
            .mr-sm-auto,
            .mx-sm-auto {
              margin-right: auto !important;
            }
          
            .mb-sm-auto,
            .my-sm-auto {
              margin-bottom: auto !important;
            }
          
            .ml-sm-auto,
            .mx-sm-auto {
              margin-left: auto !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-md"]}) {
            .m-md-0 {
              margin: 0 !important;
            }
          
            .mt-md-0,
            .my-md-0 {
              margin-top: 0 !important;
            }
          
            .mr-md-0,
            .mx-md-0 {
              margin-right: 0 !important;
            }
          
            .mb-md-0,
            .my-md-0 {
              margin-bottom: 0 !important;
            }
          
            .ml-md-0,
            .mx-md-0 {
              margin-left: 0 !important;
            }
          
            .m-md-1 {
              margin: 0.25rem !important;
            }
          
            .mt-md-1,
            .my-md-1 {
              margin-top: 0.25rem !important;
            }
          
            .mr-md-1,
            .mx-md-1 {
              margin-right: 0.25rem !important;
            }
          
            .mb-md-1,
            .my-md-1 {
              margin-bottom: 0.25rem !important;
            }
          
            .ml-md-1,
            .mx-md-1 {
              margin-left: 0.25rem !important;
            }
          
            .m-md-2 {
              margin: 0.5rem !important;
            }
          
            .mt-md-2,
            .my-md-2 {
              margin-top: 0.5rem !important;
            }
          
            .mr-md-2,
            .mx-md-2 {
              margin-right: 0.5rem !important;
            }
          
            .mb-md-2,
            .my-md-2 {
              margin-bottom: 0.5rem !important;
            }
          
            .ml-md-2,
            .mx-md-2 {
              margin-left: 0.5rem !important;
            }
          
            .m-md-3 {
              margin: 1rem !important;
            }
          
            .mt-md-3,
            .my-md-3 {
              margin-top: 1rem !important;
            }
          
            .mr-md-3,
            .mx-md-3 {
              margin-right: 1rem !important;
            }
          
            .mb-md-3,
            .my-md-3 {
              margin-bottom: 1rem !important;
            }
          
            .ml-md-3,
            .mx-md-3 {
              margin-left: 1rem !important;
            }
          
            .m-md-4 {
              margin: 1.5rem !important;
            }
          
            .mt-md-4,
            .my-md-4 {
              margin-top: 1.5rem !important;
            }
          
            .mr-md-4,
            .mx-md-4 {
              margin-right: 1.5rem !important;
            }
          
            .mb-md-4,
            .my-md-4 {
              margin-bottom: 1.5rem !important;
            }
          
            .ml-md-4,
            .mx-md-4 {
              margin-left: 1.5rem !important;
            }
          
            .m-md-5 {
              margin: 3rem !important;
            }
          
            .mt-md-5,
            .my-md-5 {
              margin-top: 3rem !important;
            }
          
            .mr-md-5,
            .mx-md-5 {
              margin-right: 3rem !important;
            }
          
            .mb-md-5,
            .my-md-5 {
              margin-bottom: 3rem !important;
            }
          
            .ml-md-5,
            .mx-md-5 {
              margin-left: 3rem !important;
            }
          
            .p-md-0 {
              padding: 0 !important;
            }
          
            .pt-md-0,
            .py-md-0 {
              padding-top: 0 !important;
            }
          
            .pr-md-0,
            .px-md-0 {
              padding-right: 0 !important;
            }
          
            .pb-md-0,
            .py-md-0 {
              padding-bottom: 0 !important;
            }
          
            .pl-md-0,
            .px-md-0 {
              padding-left: 0 !important;
            }
          
            .p-md-1 {
              padding: 0.25rem !important;
            }
          
            .pt-md-1,
            .py-md-1 {
              padding-top: 0.25rem !important;
            }
          
            .pr-md-1,
            .px-md-1 {
              padding-right: 0.25rem !important;
            }
          
            .pb-md-1,
            .py-md-1 {
              padding-bottom: 0.25rem !important;
            }
          
            .pl-md-1,
            .px-md-1 {
              padding-left: 0.25rem !important;
            }
          
            .p-md-2 {
              padding: 0.5rem !important;
            }
          
            .pt-md-2,
            .py-md-2 {
              padding-top: 0.5rem !important;
            }
          
            .pr-md-2,
            .px-md-2 {
              padding-right: 0.5rem !important;
            }
          
            .pb-md-2,
            .py-md-2 {
              padding-bottom: 0.5rem !important;
            }
          
            .pl-md-2,
            .px-md-2 {
              padding-left: 0.5rem !important;
            }
          
            .p-md-3 {
              padding: 1rem !important;
            }
          
            .pt-md-3,
            .py-md-3 {
              padding-top: 1rem !important;
            }
          
            .pr-md-3,
            .px-md-3 {
              padding-right: 1rem !important;
            }
          
            .pb-md-3,
            .py-md-3 {
              padding-bottom: 1rem !important;
            }
          
            .pl-md-3,
            .px-md-3 {
              padding-left: 1rem !important;
            }
          
            .p-md-4 {
              padding: 1.5rem !important;
            }
          
            .pt-md-4,
            .py-md-4 {
              padding-top: 1.5rem !important;
            }
          
            .pr-md-4,
            .px-md-4 {
              padding-right: 1.5rem !important;
            }
          
            .pb-md-4,
            .py-md-4 {
              padding-bottom: 1.5rem !important;
            }
          
            .pl-md-4,
            .px-md-4 {
              padding-left: 1.5rem !important;
            }
          
            .p-md-5 {
              padding: 3rem !important;
            }
          
            .pt-md-5,
            .py-md-5 {
              padding-top: 3rem !important;
            }
          
            .pr-md-5,
            .px-md-5 {
              padding-right: 3rem !important;
            }
          
            .pb-md-5,
            .py-md-5 {
              padding-bottom: 3rem !important;
            }
          
            .pl-md-5,
            .px-md-5 {
              padding-left: 3rem !important;
            }
          
            .m-md-n1 {
              margin: -0.25rem !important;
            }
          
            .mt-md-n1,
            .my-md-n1 {
              margin-top: -0.25rem !important;
            }
          
            .mr-md-n1,
            .mx-md-n1 {
              margin-right: -0.25rem !important;
            }
          
            .mb-md-n1,
            .my-md-n1 {
              margin-bottom: -0.25rem !important;
            }
          
            .ml-md-n1,
            .mx-md-n1 {
              margin-left: -0.25rem !important;
            }
          
            .m-md-n2 {
              margin: -0.5rem !important;
            }
          
            .mt-md-n2,
            .my-md-n2 {
              margin-top: -0.5rem !important;
            }
          
            .mr-md-n2,
            .mx-md-n2 {
              margin-right: -0.5rem !important;
            }
          
            .mb-md-n2,
            .my-md-n2 {
              margin-bottom: -0.5rem !important;
            }
          
            .ml-md-n2,
            .mx-md-n2 {
              margin-left: -0.5rem !important;
            }
          
            .m-md-n3 {
              margin: -1rem !important;
            }
          
            .mt-md-n3,
            .my-md-n3 {
              margin-top: -1rem !important;
            }
          
            .mr-md-n3,
            .mx-md-n3 {
              margin-right: -1rem !important;
            }
          
            .mb-md-n3,
            .my-md-n3 {
              margin-bottom: -1rem !important;
            }
          
            .ml-md-n3,
            .mx-md-n3 {
              margin-left: -1rem !important;
            }
          
            .m-md-n4 {
              margin: -1.5rem !important;
            }
          
            .mt-md-n4,
            .my-md-n4 {
              margin-top: -1.5rem !important;
            }
          
            .mr-md-n4,
            .mx-md-n4 {
              margin-right: -1.5rem !important;
            }
          
            .mb-md-n4,
            .my-md-n4 {
              margin-bottom: -1.5rem !important;
            }
          
            .ml-md-n4,
            .mx-md-n4 {
              margin-left: -1.5rem !important;
            }
          
            .m-md-n5 {
              margin: -3rem !important;
            }
          
            .mt-md-n5,
            .my-md-n5 {
              margin-top: -3rem !important;
            }
          
            .mr-md-n5,
            .mx-md-n5 {
              margin-right: -3rem !important;
            }
          
            .mb-md-n5,
            .my-md-n5 {
              margin-bottom: -3rem !important;
            }
          
            .ml-md-n5,
            .mx-md-n5 {
              margin-left: -3rem !important;
            }
          
            .m-md-auto {
              margin: auto !important;
            }
          
            .mt-md-auto,
            .my-md-auto {
              margin-top: auto !important;
            }
          
            .mr-md-auto,
            .mx-md-auto {
              margin-right: auto !important;
            }
          
            .mb-md-auto,
            .my-md-auto {
              margin-bottom: auto !important;
            }
          
            .ml-md-auto,
            .mx-md-auto {
              margin-left: auto !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
            .m-lg-0 {
              margin: 0 !important;
            }
          
            .mt-lg-0,
            .my-lg-0 {
              margin-top: 0 !important;
            }
          
            .mr-lg-0,
            .mx-lg-0 {
              margin-right: 0 !important;
            }
          
            .mb-lg-0,
            .my-lg-0 {
              margin-bottom: 0 !important;
            }
          
            .ml-lg-0,
            .mx-lg-0 {
              margin-left: 0 !important;
            }
          
            .m-lg-1 {
              margin: 0.25rem !important;
            }
          
            .mt-lg-1,
            .my-lg-1 {
              margin-top: 0.25rem !important;
            }
          
            .mr-lg-1,
            .mx-lg-1 {
              margin-right: 0.25rem !important;
            }
          
            .mb-lg-1,
            .my-lg-1 {
              margin-bottom: 0.25rem !important;
            }
          
            .ml-lg-1,
            .mx-lg-1 {
              margin-left: 0.25rem !important;
            }
          
            .m-lg-2 {
              margin: 0.5rem !important;
            }
          
            .mt-lg-2,
            .my-lg-2 {
              margin-top: 0.5rem !important;
            }
          
            .mr-lg-2,
            .mx-lg-2 {
              margin-right: 0.5rem !important;
            }
          
            .mb-lg-2,
            .my-lg-2 {
              margin-bottom: 0.5rem !important;
            }
          
            .ml-lg-2,
            .mx-lg-2 {
              margin-left: 0.5rem !important;
            }
          
            .m-lg-3 {
              margin: 1rem !important;
            }
          
            .mt-lg-3,
            .my-lg-3 {
              margin-top: 1rem !important;
            }
          
            .mr-lg-3,
            .mx-lg-3 {
              margin-right: 1rem !important;
            }
          
            .mb-lg-3,
            .my-lg-3 {
              margin-bottom: 1rem !important;
            }
          
            .ml-lg-3,
            .mx-lg-3 {
              margin-left: 1rem !important;
            }
          
            .m-lg-4 {
              margin: 1.5rem !important;
            }
          
            .mt-lg-4,
            .my-lg-4 {
              margin-top: 1.5rem !important;
            }
          
            .mr-lg-4,
            .mx-lg-4 {
              margin-right: 1.5rem !important;
            }
          
            .mb-lg-4,
            .my-lg-4 {
              margin-bottom: 1.5rem !important;
            }
          
            .ml-lg-4,
            .mx-lg-4 {
              margin-left: 1.5rem !important;
            }
          
            .m-lg-5 {
              margin: 3rem !important;
            }
          
            .mt-lg-5,
            .my-lg-5 {
              margin-top: 3rem !important;
            }
          
            .mr-lg-5,
            .mx-lg-5 {
              margin-right: 3rem !important;
            }
          
            .mb-lg-5,
            .my-lg-5 {
              margin-bottom: 3rem !important;
            }
          
            .ml-lg-5,
            .mx-lg-5 {
              margin-left: 3rem !important;
            }
          
            .p-lg-0 {
              padding: 0 !important;
            }
          
            .pt-lg-0,
            .py-lg-0 {
              padding-top: 0 !important;
            }
          
            .pr-lg-0,
            .px-lg-0 {
              padding-right: 0 !important;
            }
          
            .pb-lg-0,
            .py-lg-0 {
              padding-bottom: 0 !important;
            }
          
            .pl-lg-0,
            .px-lg-0 {
              padding-left: 0 !important;
            }
          
            .p-lg-1 {
              padding: 0.25rem !important;
            }
          
            .pt-lg-1,
            .py-lg-1 {
              padding-top: 0.25rem !important;
            }
          
            .pr-lg-1,
            .px-lg-1 {
              padding-right: 0.25rem !important;
            }
          
            .pb-lg-1,
            .py-lg-1 {
              padding-bottom: 0.25rem !important;
            }
          
            .pl-lg-1,
            .px-lg-1 {
              padding-left: 0.25rem !important;
            }
          
            .p-lg-2 {
              padding: 0.5rem !important;
            }
          
            .pt-lg-2,
            .py-lg-2 {
              padding-top: 0.5rem !important;
            }
          
            .pr-lg-2,
            .px-lg-2 {
              padding-right: 0.5rem !important;
            }
          
            .pb-lg-2,
            .py-lg-2 {
              padding-bottom: 0.5rem !important;
            }
          
            .pl-lg-2,
            .px-lg-2 {
              padding-left: 0.5rem !important;
            }
          
            .p-lg-3 {
              padding: 1rem !important;
            }
          
            .pt-lg-3,
            .py-lg-3 {
              padding-top: 1rem !important;
            }
          
            .pr-lg-3,
            .px-lg-3 {
              padding-right: 1rem !important;
            }
          
            .pb-lg-3,
            .py-lg-3 {
              padding-bottom: 1rem !important;
            }
          
            .pl-lg-3,
            .px-lg-3 {
              padding-left: 1rem !important;
            }
          
            .p-lg-4 {
              padding: 1.5rem !important;
            }
          
            .pt-lg-4,
            .py-lg-4 {
              padding-top: 1.5rem !important;
            }
          
            .pr-lg-4,
            .px-lg-4 {
              padding-right: 1.5rem !important;
            }
          
            .pb-lg-4,
            .py-lg-4 {
              padding-bottom: 1.5rem !important;
            }
          
            .pl-lg-4,
            .px-lg-4 {
              padding-left: 1.5rem !important;
            }
          
            .p-lg-5 {
              padding: 3rem !important;
            }
          
            .pt-lg-5,
            .py-lg-5 {
              padding-top: 3rem !important;
            }
          
            .pr-lg-5,
            .px-lg-5 {
              padding-right: 3rem !important;
            }
          
            .pb-lg-5,
            .py-lg-5 {
              padding-bottom: 3rem !important;
            }
          
            .pl-lg-5,
            .px-lg-5 {
              padding-left: 3rem !important;
            }
          
            .m-lg-n1 {
              margin: -0.25rem !important;
            }
          
            .mt-lg-n1,
            .my-lg-n1 {
              margin-top: -0.25rem !important;
            }
          
            .mr-lg-n1,
            .mx-lg-n1 {
              margin-right: -0.25rem !important;
            }
          
            .mb-lg-n1,
            .my-lg-n1 {
              margin-bottom: -0.25rem !important;
            }
          
            .ml-lg-n1,
            .mx-lg-n1 {
              margin-left: -0.25rem !important;
            }
          
            .m-lg-n2 {
              margin: -0.5rem !important;
            }
          
            .mt-lg-n2,
            .my-lg-n2 {
              margin-top: -0.5rem !important;
            }
          
            .mr-lg-n2,
            .mx-lg-n2 {
              margin-right: -0.5rem !important;
            }
          
            .mb-lg-n2,
            .my-lg-n2 {
              margin-bottom: -0.5rem !important;
            }
          
            .ml-lg-n2,
            .mx-lg-n2 {
              margin-left: -0.5rem !important;
            }
          
            .m-lg-n3 {
              margin: -1rem !important;
            }
          
            .mt-lg-n3,
            .my-lg-n3 {
              margin-top: -1rem !important;
            }
          
            .mr-lg-n3,
            .mx-lg-n3 {
              margin-right: -1rem !important;
            }
          
            .mb-lg-n3,
            .my-lg-n3 {
              margin-bottom: -1rem !important;
            }
          
            .ml-lg-n3,
            .mx-lg-n3 {
              margin-left: -1rem !important;
            }
          
            .m-lg-n4 {
              margin: -1.5rem !important;
            }
          
            .mt-lg-n4,
            .my-lg-n4 {
              margin-top: -1.5rem !important;
            }
          
            .mr-lg-n4,
            .mx-lg-n4 {
              margin-right: -1.5rem !important;
            }
          
            .mb-lg-n4,
            .my-lg-n4 {
              margin-bottom: -1.5rem !important;
            }
          
            .ml-lg-n4,
            .mx-lg-n4 {
              margin-left: -1.5rem !important;
            }
          
            .m-lg-n5 {
              margin: -3rem !important;
            }
          
            .mt-lg-n5,
            .my-lg-n5 {
              margin-top: -3rem !important;
            }
          
            .mr-lg-n5,
            .mx-lg-n5 {
              margin-right: -3rem !important;
            }
          
            .mb-lg-n5,
            .my-lg-n5 {
              margin-bottom: -3rem !important;
            }
          
            .ml-lg-n5,
            .mx-lg-n5 {
              margin-left: -3rem !important;
            }
          
            .m-lg-auto {
              margin: auto !important;
            }
          
            .mt-lg-auto,
            .my-lg-auto {
              margin-top: auto !important;
            }
          
            .mr-lg-auto,
            .mx-lg-auto {
              margin-right: auto !important;
            }
          
            .mb-lg-auto,
            .my-lg-auto {
              margin-bottom: auto !important;
            }
          
            .ml-lg-auto,
            .mx-lg-auto {
              margin-left: auto !important;
            }
          }
          
          @media only screen and (min-width: ${breakpoints["screen-xl"]}) {
            .m-xl-0 {
              margin: 0 !important;
            }
          
            .mt-xl-0,
            .my-xl-0 {
              margin-top: 0 !important;
            }
          
            .mr-xl-0,
            .mx-xl-0 {
              margin-right: 0 !important;
            }
          
            .mb-xl-0,
            .my-xl-0 {
              margin-bottom: 0 !important;
            }
          
            .ml-xl-0,
            .mx-xl-0 {
              margin-left: 0 !important;
            }
          
            .m-xl-1 {
              margin: 0.25rem !important;
            }
          
            .mt-xl-1,
            .my-xl-1 {
              margin-top: 0.25rem !important;
            }
          
            .mr-xl-1,
            .mx-xl-1 {
              margin-right: 0.25rem !important;
            }
          
            .mb-xl-1,
            .my-xl-1 {
              margin-bottom: 0.25rem !important;
            }
          
            .ml-xl-1,
            .mx-xl-1 {
              margin-left: 0.25rem !important;
            }
          
            .m-xl-2 {
              margin: 0.5rem !important;
            }
          
            .mt-xl-2,
            .my-xl-2 {
              margin-top: 0.5rem !important;
            }
          
            .mr-xl-2,
            .mx-xl-2 {
              margin-right: 0.5rem !important;
            }
          
            .mb-xl-2,
            .my-xl-2 {
              margin-bottom: 0.5rem !important;
            }
          
            .ml-xl-2,
            .mx-xl-2 {
              margin-left: 0.5rem !important;
            }
          
            .m-xl-3 {
              margin: 1rem !important;
            }
          
            .mt-xl-3,
            .my-xl-3 {
              margin-top: 1rem !important;
            }
          
            .mr-xl-3,
            .mx-xl-3 {
              margin-right: 1rem !important;
            }
          
            .mb-xl-3,
            .my-xl-3 {
              margin-bottom: 1rem !important;
            }
          
            .ml-xl-3,
            .mx-xl-3 {
              margin-left: 1rem !important;
            }
          
            .m-xl-4 {
              margin: 1.5rem !important;
            }
          
            .mt-xl-4,
            .my-xl-4 {
              margin-top: 1.5rem !important;
            }
          
            .mr-xl-4,
            .mx-xl-4 {
              margin-right: 1.5rem !important;
            }
          
            .mb-xl-4,
            .my-xl-4 {
              margin-bottom: 1.5rem !important;
            }
          
            .ml-xl-4,
            .mx-xl-4 {
              margin-left: 1.5rem !important;
            }
          
            .m-xl-5 {
              margin: 3rem !important;
            }
          
            .mt-xl-5,
            .my-xl-5 {
              margin-top: 3rem !important;
            }
          
            .mr-xl-5,
            .mx-xl-5 {
              margin-right: 3rem !important;
            }
          
            .mb-xl-5,
            .my-xl-5 {
              margin-bottom: 3rem !important;
            }
          
            .ml-xl-5,
            .mx-xl-5 {
              margin-left: 3rem !important;
            }
          
            .p-xl-0 {
              padding: 0 !important;
            }
          
            .pt-xl-0,
            .py-xl-0 {
              padding-top: 0 !important;
            }
          
            .pr-xl-0,
            .px-xl-0 {
              padding-right: 0 !important;
            }
          
            .pb-xl-0,
            .py-xl-0 {
              padding-bottom: 0 !important;
            }
          
            .pl-xl-0,
            .px-xl-0 {
              padding-left: 0 !important;
            }
          
            .p-xl-1 {
              padding: 0.25rem !important;
            }
          
            .pt-xl-1,
            .py-xl-1 {
              padding-top: 0.25rem !important;
            }
          
            .pr-xl-1,
            .px-xl-1 {
              padding-right: 0.25rem !important;
            }
          
            .pb-xl-1,
            .py-xl-1 {
              padding-bottom: 0.25rem !important;
            }
          
            .pl-xl-1,
            .px-xl-1 {
              padding-left: 0.25rem !important;
            }
          
            .p-xl-2 {
              padding: 0.5rem !important;
            }
          
            .pt-xl-2,
            .py-xl-2 {
              padding-top: 0.5rem !important;
            }
          
            .pr-xl-2,
            .px-xl-2 {
              padding-right: 0.5rem !important;
            }
          
            .pb-xl-2,
            .py-xl-2 {
              padding-bottom: 0.5rem !important;
            }
          
            .pl-xl-2,
            .px-xl-2 {
              padding-left: 0.5rem !important;
            }
          
            .p-xl-3 {
              padding: 1rem !important;
            }
          
            .pt-xl-3,
            .py-xl-3 {
              padding-top: 1rem !important;
            }
          
            .pr-xl-3,
            .px-xl-3 {
              padding-right: 1rem !important;
            }
          
            .pb-xl-3,
            .py-xl-3 {
              padding-bottom: 1rem !important;
            }
          
            .pl-xl-3,
            .px-xl-3 {
              padding-left: 1rem !important;
            }
          
            .p-xl-4 {
              padding: 1.5rem !important;
            }
          
            .pt-xl-4,
            .py-xl-4 {
              padding-top: 1.5rem !important;
            }
          
            .pr-xl-4,
            .px-xl-4 {
              padding-right: 1.5rem !important;
            }
          
            .pb-xl-4,
            .py-xl-4 {
              padding-bottom: 1.5rem !important;
            }
          
            .pl-xl-4,
            .px-xl-4 {
              padding-left: 1.5rem !important;
            }
          
            .p-xl-5 {
              padding: 3rem !important;
            }
          
            .pt-xl-5,
            .py-xl-5 {
              padding-top: 3rem !important;
            }
          
            .pr-xl-5,
            .px-xl-5 {
              padding-right: 3rem !important;
            }
          
            .pb-xl-5,
            .py-xl-5 {
              padding-bottom: 3rem !important;
            }
          
            .pl-xl-5,
            .px-xl-5 {
              padding-left: 3rem !important;
            }
          
            .m-xl-n1 {
              margin: -0.25rem !important;
            }
          
            .mt-xl-n1,
            .my-xl-n1 {
              margin-top: -0.25rem !important;
            }
          
            .mr-xl-n1,
            .mx-xl-n1 {
              margin-right: -0.25rem !important;
            }
          
            .mb-xl-n1,
            .my-xl-n1 {
              margin-bottom: -0.25rem !important;
            }
          
            .ml-xl-n1,
            .mx-xl-n1 {
              margin-left: -0.25rem !important;
            }
          
            .m-xl-n2 {
              margin: -0.5rem !important;
            }
          
            .mt-xl-n2,
            .my-xl-n2 {
              margin-top: -0.5rem !important;
            }
          
            .mr-xl-n2,
            .mx-xl-n2 {
              margin-right: -0.5rem !important;
            }
          
            .mb-xl-n2,
            .my-xl-n2 {
              margin-bottom: -0.5rem !important;
            }
          
            .ml-xl-n2,
            .mx-xl-n2 {
              margin-left: -0.5rem !important;
            }
          
            .m-xl-n3 {
              margin: -1rem !important;
            }
          
            .mt-xl-n3,
            .my-xl-n3 {
              margin-top: -1rem !important;
            }
          
            .mr-xl-n3,
            .mx-xl-n3 {
              margin-right: -1rem !important;
            }
          
            .mb-xl-n3,
            .my-xl-n3 {
              margin-bottom: -1rem !important;
            }
          
            .ml-xl-n3,
            .mx-xl-n3 {
              margin-left: -1rem !important;
            }
          
            .m-xl-n4 {
              margin: -1.5rem !important;
            }
          
            .mt-xl-n4,
            .my-xl-n4 {
              margin-top: -1.5rem !important;
            }
          
            .mr-xl-n4,
            .mx-xl-n4 {
              margin-right: -1.5rem !important;
            }
          
            .mb-xl-n4,
            .my-xl-n4 {
              margin-bottom: -1.5rem !important;
            }
          
            .ml-xl-n4,
            .mx-xl-n4 {
              margin-left: -1.5rem !important;
            }
          
            .m-xl-n5 {
              margin: -3rem !important;
            }
          
            .mt-xl-n5,
            .my-xl-n5 {
              margin-top: -3rem !important;
            }
          
            .mr-xl-n5,
            .mx-xl-n5 {
              margin-right: -3rem !important;
            }
          
            .mb-xl-n5,
            .my-xl-n5 {
              margin-bottom: -3rem !important;
            }
          
            .ml-xl-n5,
            .mx-xl-n5 {
              margin-left: -3rem !important;
            }
          
            .m-xl-auto {
              margin: auto !important;
            }
          
            .mt-xl-auto,
            .my-xl-auto {
              margin-top: auto !important;
            }
          
            .mr-xl-auto,
            .mx-xl-auto {
              margin-right: auto !important;
            }
          
            .mb-xl-auto,
            .my-xl-auto {
              margin-bottom: auto !important;
            }
          
            .ml-xl-auto,
            .mx-xl-auto {
              margin-left: auto !important;
            }
          }
          

        `;
    }}

`;