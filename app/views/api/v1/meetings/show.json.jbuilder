json.id @meeting.id
json.name @meeting.name
json.address @meeting.address
json.start_time @meeting.start_time
json.end_time @meeting.end_time
json.notes @meeting.notes
json.tags @meeting.tags.each do |tag|
  json.id tag.id
  json.id tag.name
end 