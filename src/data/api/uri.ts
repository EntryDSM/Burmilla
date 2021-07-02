enum uri {
    signin = '/admin/auth',
    total = '/admin/statics',
    applicant = '/admin/applicant',
    applicants = '/admin/applicants?size=10&page=0',
    schedules = '/admin/schedules',
    ticket_print = '/admin/excel/admission-ticket/',
    applicants_print = '/admin/excel/applicants',
    make_applicants = '/admin/applicants/examcode',
    arrived_application = '/admin/applicant/printed-arrived'
}

export default uri